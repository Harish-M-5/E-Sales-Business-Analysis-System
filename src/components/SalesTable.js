import React from "react";
import salesData from "../data/sales_data.json";

function SalesTable() {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ color: "#fff" }}>Sales Data Table</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", color: "#fff" }}>
        <thead style={{ background: "#1f2937" }}>
          <tr>
            <th style={{ padding: "10px" }}>Date</th>
            <th>Region</th>
            <th>Product</th>
            <th>Units Sold</th>
            <th>Revenue</th>
            <th>Returns</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((item, index) => (
            <tr key={index} style={{ background: index % 2 === 0 ? "#374151" : "#4b5563" }}>
              <td style={{ padding: "10px" }}>{item.date}</td>
              <td>{item.region}</td>
              <td>{item.product}</td>
              <td>{item.units_sold}</td>
              <td>{item.revenue}</td>
              <td>{item.returns}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
