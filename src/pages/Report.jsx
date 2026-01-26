import React from "react";
import "./Report.css";

export default function Report() {
  return (
    <div className="report-container">
      <h1 className="report-title">📊 Sales Performance Report</h1>
      <a href="/docs/project.pdf" download className="download-btn">
        Download Full Report PDF
      </a>

      <div className="report-content">
        <h2>1. Abstract</h2>
        <p>
          This project analyzes sales data to identify issues and provides actionable business solutions.
        </p>

        <h2>2. Introduction</h2>
        <p>
          Sales performance is critical for business growth. This project helps organizations make informed decisions using data-driven insights.
        </p>

        <h2>3. Objectives</h2>
        <ul>
          <li>Analyze sales data</li>
          <li>Identify low performing areas</li>
          <li>Provide business solutions</li>
          <li>Visualize data effectively</li>
        </ul>

        <h2>4. Tools Used</h2>
        <p>Python, Excel, Power BI, React, VS Code</p>

        <h2>5. Methodology</h2>
        <p>Agile methodology with iterative development</p>

        <h2>6. Results</h2>
        <ul>
          <li>Low performing regions identified</li>
          <li>Best selling products highlighted</li>
          <li>Business solutions generated</li>
        </ul>

        <h2>7. Conclusion</h2>
        <p>The system helps improve sales analysis and decision-making effectively.</p>

        <h2>8. Future Scope</h2>
        <ul>
          <li>Real-time data integration</li>
          <li>AI-based prediction</li>
          <li>Cloud deployment</li>
        </ul>
      </div>
    </div>
  );
}
