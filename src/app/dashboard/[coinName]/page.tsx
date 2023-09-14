"use client";
import CoinInfo from "@/components/CoinInfo";
import CoinLineChart from "@/components/CoinLineChart";
import { useChartData } from "@/hooks/useChartData";
import { ids } from "@/lib/ids";
import { useCoinsData } from "@/hooks/useCoinData";
import { Loader2 } from "lucide-react";

// Inside your component

interface pageProps {
  params: {
    coinName: string;
  };
}

const page: ({ params }: pageProps) => any = ({ params }) => {
  const { coinName } = params;
  const { data: coin, isError } = useCoinsData(ids);
  const { data: chartData, isLoading } = useChartData(coinName);
  let coinData;
  if (Array.isArray(coin)) {
    coinData = coin.find((coin: any) => coin.id === coinName);
  }
  console.log(chartData);
  console.log(coinData);

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader2 className="mr-2 h-8 w-8 text-green-500 animate-spin" />
      </div>
    );
  }
  return (
    <>
      <div className="h-12 max-w-screen border border-slate-300"></div>
      <div className="max-w-screen h-auto flex items-center justify-center ">
        <CoinInfo data={coinData} />
        <CoinLineChart data={chartData} coinName={coinName} />
        <CoinInfo data={coinData} />
      </div>
    </>
  );
};

export default page;
