import React from "react";
import "./Documentation.css";

export default function Documention() {
  return (
    <div className="doc-container">
      <h1 className="doc-title">📚 Project Documentation</h1>

      {/* BRD */}
      <div className="doc-section">
        <h2>📄 Business Requirement Document (BRD)</h2>
        <a
          href="/docs/BRD.pdf"
          download
          className="download-btn"
        >
          Download BRD PDF
        </a>
        <ul>
          <li><strong>Project:</strong> Sales Performance Analysis and Solution System</li>
          <li><strong>Objective:</strong> Improve sales using data insights</li>
          <li><strong>Stakeholders:</strong> Owner, Manager, Analyst, IT Team</li>
          <li><strong>Problems:</strong> No centralized analysis, manual reporting delays</li>
          <li><strong>Scope:</strong> Analysis, Dashboard, Insights</li>
        </ul>
      </div>

      {/* SRS */}
      <div className="doc-section">
        <h2>💻 Software Requirement Specification (SRS)</h2>
        <a href="/docs/SRS.pdf" download className="download-btn">
          Download SRS PDF
        </a>
        <ul>
          <li>Functional: Upload Excel, analyze sales, identify low-performing regions</li>
          <li>Non-Functional: Fast, secure, scalable, user-friendly UI</li>
          <li>Architecture: React frontend, Python backend, Excel data, Power BI</li>
          <li>Software: VS Code, Python 3.x, Node.js, Power BI</li>
        </ul>
      </div>

      {/* Agile */}
      <div className="doc-section">
        <h2>⚡ Agile Process</h2>
        <a href="/docs/Agile.pdf" download className="download-btn">
          Download Agile PDF
        </a>
        <p>Methodology: Agile Scrum, Sprint Duration: 2 Weeks</p>
        <ul>
          <li>Sprint 1: Requirement Gathering, BRD & SRS</li>
          <li>Sprint 2: Python Implementation, UI Setup</li>
          <li>Sprint 3: Dashboard & Power BI Integration</li>
          <li>Sprint 4: Testing & Deployment</li>
        </ul>
      </div>

      {/* Business Solution */}
<div className="doc-section">
  <h2>💡 Business Solution Document</h2>
  <a href="/docs/BS.pdf" download className="download-btn">
    Download Business Solution PDF
  </a>

  <h3>📉 Identified Problems:</h3>
  <ul>
    <li>Low sales in certain regions</li>
    <li>Poor performing products</li>
    <li>Delayed reporting</li>
  </ul>

  <h3>🚀 Proposed Solutions:</h3>
  <ol>
    <li>Focus marketing in low performing regions</li>
    <li>Offer discounts on slow moving products</li>
    <li>Improve supply chain in weak areas</li>
    <li>Introduce new product bundles</li>
    <li>Increase digital marketing</li>
  </ol>

  <h3>📈 Business Impact:</h3>
  <ul>
    <li>Increased revenue</li>
    <li>Reduced operational losses</li>
    <li>Improved customer satisfaction</li>
    <li>Better market coverage</li>
  </ul>
</div>


      {/* Jira */}
      <div className="doc-section">
        <h2>📝 Jira Tasks & User Stories</h2>
        <a
          href="https://harishmurugan005arni.atlassian.net/browse/SAP-1?atlOrigin=eyJpIjoiMzU5MzFmNjY0OWM4NDFlMGE5MTAxNTE3MmZmMGRlMDkiLCJwIjoiaiJ9"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          Open Jira Board
        </a>
        <ul>
          <li>User Story 1: View total sales by region</li>
          <li>User Story 2: Product-wise sales</li>
          <li>User Story 3: Analyze low-performing regions</li>
          <li>User Story 4: Visual dashboards</li>
          <li>Tasks: Data collection, Analysis, UI, Dashboard, Testing</li>
        </ul>
      </div>
    </div>
  );
}
