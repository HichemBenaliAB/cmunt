"use client";
import CoinInfo from "@/components/CoinInfo";
import CoinLineChart from "@/components/CoinLineChart";
import { FC, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// Inside your component

interface pageProps {
  params: {
    coinName: string;
  };
}

const page: FC<pageProps> = ({ params }) => {
  const { data: chartData, isLoading } = useQuery({
    queryKey: ["chartdata"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=10`
      );
      return data;
    },
  });

  const { coinName } = params;

  const queryClient = useQueryClient();
  const cachedData: object[] | undefined = queryClient.getQueryData([
    "coinsdata",
  ]);
  if (!cachedData) {
    return null; // or some placeholder/loading component
  }

  const coinData: any = cachedData
    ? cachedData?.find((coin: any) => coin.id === coinName)
    : null;
  console.log(cachedData);
  if (!coinData) {
    return <div>Coin not found</div>;
  }
  return (
    <div className="max-w-screen h-[92vh] flex items-center justify-center ">
      <CoinLineChart data={chartData} />
      <CoinInfo data={coinData} />
    </div>
  );
};

export default page;
