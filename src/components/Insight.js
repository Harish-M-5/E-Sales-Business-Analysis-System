import React from "react";
import salesData from "../data/sales_data.json";

export default function Insight() {
  const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0);
  const totalUnits = salesData.reduce((sum, item) => sum + item.units_sold, 0);
  const totalReturns = salesData.reduce((sum, item) => sum + item.returns, 0);

  const cardStyle = {
    background: "#1f2937",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center",
    marginRight: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  };

  return (
    <div style={{ display: "flex", marginTop: "20px" }}>
      <div style={cardStyle}>
        <h3>Total Revenue</h3>
        <p>${totalRevenue.toLocaleString()}</p>
      </div>
      <div style={cardStyle}>
        <h3>Total Units Sold</h3>
        <p>{totalUnits}</p>
      </div>
      <div style={cardStyle}>
        <h3>Total Returns</h3>
        <p>{totalReturns}</p>
      </div>
    </div>
  );
}
