"use client";
import Coin from "@/components/Coin";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ids } from "@/lib/ids";
import CryptoIndexBar from "@/components/CryptoIndexBar";
import { sortedList } from "@/lib/sort";
import { log } from "console";
import { useCoinsData } from "@/hooks/useCoinData";

function page() {
  const [data, setData] = useState<any>([]); // To store data for each coin
  const [sortOrder, setSortOrder] = useState<string>("asc"); // To store data for each coin
  const { data: cacheD, isLoading, isError } = useCoinsData(ids);

  const handleSort = (order: string) => {
    setSortOrder((prevDirection) => (prevDirection === "asc" ? "desc" : "asc"));
    const sorted = sortedList(data, order, sortOrder);
    setData(sorted);
  };
  useEffect(() => {
    setData(cacheD);
  }, [cacheD]);

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
