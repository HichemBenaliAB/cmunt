// lib/fetchCoins.ts

import axios from "axios";
import redisClient from "./redis";

export async function fetchCharts(coinName: string): Promise<any> {
  const cacheKey = `coinsChartData-${coinName}`;

  // Try to get data from Redis cache
  let cachedData: any = await redisClient.get(cacheKey);

  if (cachedData) {
    console.log("Data from Redis cache");
    return cachedData;
  }
  // Fetch data from the API if not in cache
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=10`
  );
  console.log(response);

  // Cache the data in Redis
  cachedData = JSON.stringify(response.data);

  await redisClient.set(cacheKey, cachedData);
  await redisClient.expire(cacheKey, 3600); // Optional: Cache expiration after 1 hour

  return response.data;
}
