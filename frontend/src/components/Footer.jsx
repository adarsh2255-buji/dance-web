import React from "react";

const Footer = () => (
  <footer className="bg-purple-700  text-white p-4 mt-8">
    <div className="container mx-auto text-center">
      &copy; {new Date().getFullYear()} Dance Online. All rights reserved.
    </div>
  </footer>
);

export default Footer; 