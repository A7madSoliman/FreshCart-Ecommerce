import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Your Logo</h1>
          </div>
          {/* Add your navigation items here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
