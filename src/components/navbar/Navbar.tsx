import React from "react";
import { Link } from "wouter";

const Navbar: React.FC = () => {
  return (
    <div className="bg-pink-600 text-white shadow-xl sticky top-0 z-50">
      <div className="site-container py-4 text-2xl">
        <Link href="/">RxCinema</Link>
      </div>
    </div>
  );
};

export default Navbar;
