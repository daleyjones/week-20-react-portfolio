import React from "react";

function PortfolioItem({ title, description, imageUrl, link }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img
          className="card-img-top"
          src={imageUrl}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href={link} className="btn btn-sm btn-outline-secondary">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
