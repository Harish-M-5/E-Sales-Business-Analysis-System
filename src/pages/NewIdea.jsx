import React from "react";
import "./NewIdea.css";

export default function NewIdea() {
  return (
    <div className="idea-container">
      <h1 className="idea-title">💡 New Business Ideas for Sales Growth</h1>

      <div className="idea-grid">

        <div className="idea-card">
          <img src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="AI" />
          <h3>🤖 AI-Based Smart Pricing</h3>
          <p>
            Use Artificial Intelligence to automatically adjust product prices based on demand,
            customer behavior, season, and competition. This increases profit and reduces stock loss.
          </p>
        </div>

        <div className="idea-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Loyalty" />
          <h3>🎁 Customer Loyalty Program</h3>
          <p>
            Introduce reward points for every purchase. Customers can redeem points for discounts
            or free products, improving customer retention and satisfaction.
          </p>
        </div>

        <div className="idea-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3063/3063821.png" alt="Online" />
          <h3>🌐 Online & Offline Sales Integration</h3>
          <p>
            Sync online website sales with offline store data in real time for better stock tracking
            and unified customer experience.
          </p>
        </div>

        <div className="idea-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1087/1087840.png" alt="Delivery" />
          <h3>🚚 Hyperlocal Fast Delivery</h3>
          <p>
            Partner with local delivery services to deliver products within hours, increasing
            customer trust and repeat purchases.
          </p>
        </div>

        <div className="idea-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1581/1581884.png" alt="Analytics" />
          <h3>📊 Predictive Sales Analytics</h3>
          <p>
            Use historical data and machine learning to predict future sales and demand, helping
            businesses plan inventory efficiently.
          </p>
        </div>

      </div>
    </div>
  );
}
