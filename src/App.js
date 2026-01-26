import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Documentation from "./pages/Documentation";
import Report from "./pages/Report";
import NewIdea from "./pages/NewIdea";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginLeft: "240px", padding: "20px", background: "#07150f", minHeight: "100vh", color: "white" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/report" element={<Report />} />
          <Route path="/idea" element={<NewIdea />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
