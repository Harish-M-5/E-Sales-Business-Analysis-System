import React from "react";
import "./Dashboard.css";
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  AreaChart, Area,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer
} from "recharts";
import { salesData } from "../data/salesData";

export default function Dashboard() {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#a83279", "#32a852", "#e83232"];

  // Aggregate Data
  const revenueByRegion = [];
  const unitsByProduct = [];
  const returnsData = [];
  const regionMap = {};
  const productMap = {};

  salesData.forEach(item => {
    // Revenue by Region
    regionMap[item.region] = (regionMap[item.region] || 0) + item.revenue;
    // Units by Product
    productMap[item.product] = (productMap[item.product] || 0) + item.units;
    // Returns by Product
    returnsData.push({ product: item.product, returns: item.returns });
  });

  for (const [region, revenue] of Object.entries(regionMap)) revenueByRegion.push({ region, revenue });
  for (const [product, units] of Object.entries(productMap)) unitsByProduct.push({ product, units });

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">📊 Sales Dashboard</h1>
      <div className="chart-grid">
        {/*  Revenue Trend */}
        <div className="chart-card">
          <h3>Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid stroke="#333"/>
              <XAxis dataKey="product"/>
              <YAxis/>
              <Tooltip/>
              <Line type="monotone" dataKey="revenue" stroke="#2aff6d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/*  Units Sold */}
        <div className="chart-card">
          <h3>Units Sold</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={unitsByProduct}>
              <CartesianGrid stroke="#333"/>
              <XAxis dataKey="product"/>
              <YAxis/>
              <Tooltip/>
              <Bar dataKey="units" fill="#FF8042"/>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/*  Revenue by Region */}
        <div className="chart-card">
          <h3>Revenue by Region</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={revenueByRegion} dataKey="revenue" nameKey="region" cx="50%" cy="50%" outerRadius={80} label>
                {revenueByRegion.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip/>
              <Legend/>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/*  Area Chart */}
        <div className="chart-card">
          <h3>Cumulative Revenue</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={salesData}>
              <CartesianGrid stroke="#333"/>
              <XAxis dataKey="product"/>
              <YAxis/>
              <Tooltip/>
              <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/*  Returns */}
        <div className="chart-card">
          <h3>Returns by Product</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={returnsData}>
              <CartesianGrid stroke="#333"/>
              <XAxis dataKey="product"/>
              <YAxis/>
              <Tooltip/>
              <Bar dataKey="returns" fill="#ff3333"/>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/*  Units Trend */}
        <div className="chart-card">
          <h3>Units Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={unitsByProduct}>
              <CartesianGrid stroke="#333"/>
              <XAxis dataKey="product"/>
              <YAxis/>
              <Tooltip/>
              <Line type="monotone" dataKey="units" stroke="#00C49F"/>
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/*  Returns Percentage */}
        <div className="chart-card">
          <h3>Returns Percentage</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={returnsData} dataKey="returns" nameKey="product" cx="50%" cy="50%" outerRadius={80} label>
                {returnsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                ))}
              </Pie>
              <Tooltip/>
              <Legend/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

