"use client";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FC } from "react";
import axios from "axios";

interface CoinLineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const CoinLineChart: ({ data }: any) => any = ({ data }) => {
  console.log(data);

  const labels = data?.prices?.map((entry: any) => {
    const timestamp = entry[0];
    return new Date(timestamp).toLocaleDateString(); // Or another format if you prefer
  });

  const dataValues = data?.prices?.map((entry: any) => entry[1]);
  const initialData = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 2",
        data: dataValues,
        borderColor: "green",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        pointRadius: 2, // This hides the points
      },
    ],
  };
  // Now, you can use `labels` for your chart labels and `dataValues` for your dataset data.

  return (
    <div className=" mx-4 ">
      <h1 className="font-semibold text-lg"></h1>
      <Line height={400} width={700} options={options} data={initialData} />
    </div>
  );
};
export default CoinLineChart;
