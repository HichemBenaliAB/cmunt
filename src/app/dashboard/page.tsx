"use client";
import Coin from "@/components/Coin";
import axios from "axios";
import { FC, useEffect, useMemo, useState } from "react";
import { ids } from "@/lib/ids";
import CryptoIndexBar from "@/components/CryptoIndexBar";
import { sortedList } from "@/lib/sort";
import { log } from "console";
import { useCoinsData } from "@/hooks/useCoinData";

function page() {
  const [data, setData] = useState<any>([]); // To store data for each coin
  const [sortOrder, setSortOrder] = useState<string>("asc"); // To store data for each coin
  const [sortedData, setSortedData] = useState<any>([]);
  const { data: cacheD, isLoading, isError } = useCoinsData(ids);

  const handleSort = (order: string) => {
    setSortOrder((prevDirection) => (prevDirection === "asc" ? "desc" : "asc"));
    const sorted = sortedList(data, order, sortOrder);
    setSortedData(sorted);
  };
  useEffect(() => {
    setData(cacheD);
    // Also set the sortedData initially with the fetched data
    setSortedData(cacheD);
  }, [cacheD]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="pt-20">
      <CryptoIndexBar sort={handleSort} />
      {sortedData?.map((coin: any) => (
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
