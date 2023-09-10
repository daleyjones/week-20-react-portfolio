import React from "react";

import Nav from "./Nav";
import '../App.css';

function Header({ pages, onSetPage }) {
  return (
    <header className="masthead md-auto">
      <div className="inner">
        <h3 className="masthead-brand">Portfolio</h3>
        <Nav pages={pages} onSetPage={onSetPage} />
      </div>
    </header>
  );
}

export default Header;
