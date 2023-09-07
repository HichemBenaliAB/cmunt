"use client";
import CoinInfo from "@/components/CoinInfo";
import CoinLineChart from "@/components/CoinLineChart";
import { FC, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useChartData } from "@/hooks/useChartData";
// Inside your component

interface pageProps {
  params: {
    coinName: string;
  };
}

const page: FC<pageProps> = ({ params }) => {
  const { coinName } = params;

  const { data: chartData } = useChartData(coinName);

  let coinData;
  if (Array.isArray(chartData)) {
    coinData = chartData.find((coin: any) => coin.id === coinName);
  }
  console.log(chartData);

  return (
    <div className="max-w-screen h-[92vh] flex items-center justify-center ">
      <CoinLineChart data={chartData} />

      <CoinInfo data={coinData} />
    </div>
  );
};

export default page;
