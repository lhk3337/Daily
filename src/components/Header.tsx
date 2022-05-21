import React from "react";

const Header = () => {
  return (
    <header className="font-bold flex py-5 border-b border-[#e2e2e2] justify-between items-center">
      <div className="w-3/12">
        <button className="px-5 py-2.5 bg-[#ececec] rounded">&lt;</button>
      </div>
      <h1>2022년 5월</h1>
      <div className="w-3/12">
        <button className="px-5 py-2.5 bg-[#ececec] rounded">&gt;</button>
      </div>
    </header>
  );
};

export default Header;
