import React from "react";
import Insight from "./components/Insight";
import SalesChart from "./components/SalesChart";
import SalesTable from "./components/SalesTable";

function App() {
  return (
    <div style={{ background: "#111827", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ color: "#fff", textAlign: "center" }}>Sales Performance Dashboard</h1>
      <Insight />
      <SalesChart />
      <SalesTable />
    </div>
  );
}

export default App;
