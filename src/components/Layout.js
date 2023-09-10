import React from "react";
import '../App.css';
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ pages, onSetPage, children }) {
  return (
    <Container className="layout-container">
      <Header pages={pages} onSetPage={onSetPage} />
      <main className="layout-main">{children}</main>
      <Footer />
    </Container>
  );
}

export default Layout;
