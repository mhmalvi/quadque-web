import React from "react";

const Layout = () => {
  return (
    <div className="w-full h-full">
      {/* Outer Layer */}
      <div className="w-10"></div>
      <div>
        <div className="w-full h-10 bg-red-400"></div>
        <div className="w-full h-full bg-green-500 main_container"></div>
        <div className="w-full h-10 bg-blue-400"></div>
      </div>
    </div>
  );
};

export default Layout;
