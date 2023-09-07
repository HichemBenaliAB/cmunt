// hooks/useCoinsData.ts

import { useQuery } from "@tanstack/react-query";
import { fetchCharts } from "../lib/fetchCharts";

export function useChartData(coinName: string) {
  return useQuery(["coinsChartData", coinName], () => fetchCharts(coinName));
}
