import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "../../DummyData";

const LineCharts = () => {
  return (
    // Define the charts attributes
    <ResponsiveContainer width="100%" height="80%">
      <LineChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#f1ebeb" />
        <XAxis dataKey="name" tick={{ fill: "#706f77", fontSize: 9 }} />
        <YAxis tick={{ fill: "#706f77", fontSize: 9 }} />
        <Tooltip />
        <Line
          fill="#a7a6ac"
          type="monotone"
          dataKey="pv"
          stroke="#a7a6ac"
          activeDot={{ r: 8 }}
        />
        <Line fill="#91a5c2" type="monotone" dataKey="uv" stroke="#91a5c2" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineCharts;
