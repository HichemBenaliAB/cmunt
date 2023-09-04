"use client";
import Coin from "@/components/Coin";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ids } from "@/lib/ids";
import CryptoIndexBar from "@/components/CryptoIndexBar";
import { sortedList } from "@/lib/sort";
function page() {
  const [data, setData] = useState<any>([]); // To store data for each coin
  const [sortOrder, setSortOrder] = useState<string>("asc"); // To store data for each coin
  const handleSort = (order: string) => {
    setSortOrder((prevDirection) => (prevDirection === "asc" ? "desc" : "asc"));
    const sorted = sortedList(data, order, sortOrder);
    setData(sorted);
  };
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en&precision=2`
      );
      setData(data);
    };

    getData();
  }, []); // Empty dependency array to ensure this useEffect runs only once

  return (
    <div className="pt-20">
      <CryptoIndexBar sort={handleSort} />
      {data?.map((coin: any) => (
        <Coin
          key={coin.symbol}
          name={coin.name}
          price={coin.current_price}
          image={coin.image}
          marketCap={coin.market_cap}
          symbol={coin.symbol}
        />
      ))}
    </div>
  );
}

export default page;
