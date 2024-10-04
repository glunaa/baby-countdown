
import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container text-center">
        <p className="mb-0">© {new Date().getFullYear()} Awaiting Luna's Arrival</p>
      </div>
    </footer>
  );
}

export default Footer;
