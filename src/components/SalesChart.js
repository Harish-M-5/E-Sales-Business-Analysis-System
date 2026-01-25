import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from "recharts";
import salesData from "../data/sales_data.json";

export default function SalesChart() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
      {/* Bar Chart Revenue by Region */}
      <div>
        <h3 style={{ color: "#fff" }}>Revenue by Region</h3>
        <BarChart width={400} height={250} data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#4ade80" />
        </BarChart>
      </div>

      {/* Line Chart Units Sold Trend */}
      <div>
        <h3 style={{ color: "#fff" }}>Units Sold Trend</h3>
        <LineChart width={400} height={250} data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="units_sold" stroke="#facc15" strokeWidth={3} />
        </LineChart>
      </div>
    </div>
  );
}
