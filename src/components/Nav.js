import React from "react";
import '../App.css';

function Nav({ pages, onSetPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">My Website</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {pages.map((page, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link"
                  href={`#${page.toLowerCase()}`}
                  onClick={() => onSetPage(page)}
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
