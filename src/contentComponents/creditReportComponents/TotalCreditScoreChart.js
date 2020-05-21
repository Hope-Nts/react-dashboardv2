import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Feb",
    uv: 700,
  },
  {
    name: "Mar",
    uv: 400,
  },
  {
    name: "Apr",
    uv: 500,
  },
  {
    name: "May",
    uv: 678,
  },
  {
    name: "Jun",
    uv: 509,
  },
];

const TotalCreditChart = () => {
  return (
    <BarChart width={530} height={310} data={data} barGap="1" barSize="1">
      <CartesianGrid strokeDasharray="10" vertical={false} />
      <XAxis dataKey="name" />
      <YAxis
        type="number"
        ticks={[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
        domain={[100, 1000]}
      />
      <Tooltip />
      <Legend />
      <defs>
        <linearGradient
          id="colorUv"
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          spreadMethod="reflect"
        >
          <stop offset="0.09" stopColor="grey" />
          <stop offset="0.9" stopColor="green" />
          <stop offset="1" stopColor="blue" />
        </linearGradient>
      </defs>
      <Bar dataKey="uv" fill="url(#colorUv)" barSize={10} />
    </BarChart>
  );
};

export default TotalCreditChart;
