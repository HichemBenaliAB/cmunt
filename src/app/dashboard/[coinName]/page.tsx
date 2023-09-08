"use client";
import CoinInfo from "@/components/CoinInfo";
import CoinLineChart from "@/components/CoinLineChart";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useChartData } from "@/hooks/useChartData";
import { useGetFetchQuery } from "@/hooks/globalQuery";
// Inside your component

interface pageProps {
  params: {
    coinName: string;
  };
}

const page: FC<pageProps> = ({ params }) => {
  const { coinName } = params;

  const { data: chartData } = useChartData(coinName);

  const cachedData: any = useGetFetchQuery(["coinsData"]);
  let coinData;
  if (Array.isArray(cachedData)) {
    coinData = cachedData.find((coin: any) => coin.id === coinName);
  }
  console.log(chartData);
  console.log(coinData);

  return (
    <div className="max-w-screen h-[92vh] flex items-center justify-center ">
      <CoinLineChart data={chartData} coinName={coinName} />

      <CoinInfo data={coinData} />
    </div>
  );
};

export default page;
