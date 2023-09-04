"use client";
import { useEffect, useRef } from "react";
import "chartjs-chart-financial"; // Import the financial plugin
import { FC } from "react";
import { Chart, CategoryScale, LinearScale, TimeScale } from "chart.js";
import {
  CandlestickController,
  CandlestickElement,
} from "chartjs-chart-financial";

// Register the elements

import "chartjs-adapter-date-fns";
interface CandleStickChartProps {
  data: {
    t: number; // Convert to timestamp
    o: number;
    h: number;
    l: number;
    c: number;
  };
}
Chart.register(CategoryScale, LinearScale, TimeScale);
Chart.register(CandlestickElement, CandlestickController);
const CandleStickChart: FC<any> = ({ data }) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      new Chart(ctx, {
        type: "candlestick",
        data: {
          datasets: [
            {
              label: "Candlestick Chart",
              data: data,
              borderColor: "black",
              backgroundColor: (context: any) => {
                const value =
                  context.dataset.data[context.dataIndex].c -
                  context.dataset.data[context.dataIndex].o;
                return value < 0 ? "red" : "green";
              },
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "time",
            },
            y: {
              type: "linear",
            },
          },
        },
      });
    }
  }, [chartRef, data]);

  return <canvas width={600} height={600} ref={chartRef}></canvas>;
};

export default CandleStickChart;
