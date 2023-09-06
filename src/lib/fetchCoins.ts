// lib/fetchCoins.ts

import axios from "axios";
import redisClient from "./redis";
import { ids } from "@/lib/ids";

export async function fetchCoins(ids: string): Promise<any> {
  const cacheKey = `coinsData`;

  // Try to get data from Redis cache
  let cachedData = await redisClient.get(cacheKey);

  if (cachedData) {
    console.log("Data from Redis cache");
    return cachedData;
  }

  // Fetch data from the API if not in cache
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en&precision=2`
  );

  // Cache the data in Redis
  cachedData = JSON.stringify(response.data);
  await redisClient.set(cacheKey, cachedData);
  await redisClient.expire(cacheKey, 3600); // Optional: Cache expiration after 1 hour

  return response.data;
}
