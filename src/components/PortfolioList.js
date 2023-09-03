import React from "react";
import PortfolioItem from "./PortfolioItem";

function PortfolioList({ portfolioItems }) {
  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="text-center">Portfolio</h2>
        <div className="row">
          {portfolioItems.map((item) => (
            <PortfolioItem
              key={item.id} // Use a unique identifier (e.g., item.id) as the key
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioList;
