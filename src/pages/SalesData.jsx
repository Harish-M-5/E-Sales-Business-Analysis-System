import React from "react";
import { salesData } from "../data/salesDataexcel";
import "./SalesData.css";

export default function SalesData() {
  return (
    <div className="sales-container">
      <h1>📊 Sales Data Table</h1>

      <table className="sales-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Region</th>
            <th>Units Sold</th>
            <th>Revenue</th>
            <th>Returns</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.product}</td>
              <td>{item.region}</td>
              <td>{item.unitsSold}</td>
              <td>₹{item.revenue}</td>
              <td>{item.returns}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
