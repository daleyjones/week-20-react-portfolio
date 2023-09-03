import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container text-center">
        <span className="text-muted">
          &copy; {new Date().getFullYear()} Your Website Name
        </span>
      </div>
    </footer>
  );
}

export default Footer;
