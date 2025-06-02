import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </div>
    </main>
    <Footer />
  </div>
);

export default Layout;
