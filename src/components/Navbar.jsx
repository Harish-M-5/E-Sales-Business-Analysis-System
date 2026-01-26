import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="sidebar">
      <h2 className="logo">SalesPro</h2>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/docs">Documentation</Link>
      <Link to="/report">Report</Link>
      <Link to="/idea">New Business Idea</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
