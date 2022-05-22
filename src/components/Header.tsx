import React from "react";

const Header = () => {
  return (
    <header className="flex py-5 border-b border-[#e2e2e2] items-center  w-full">
      <div className="w-3/12 justify-start flex">
        <button className="px-5 py-2.5 bg-[#ececec] rounded whitespace-nowrap">&lt;</button>
      </div>
      <h1 className="w-1/2 text-2xl justify-center font-bold flex">2022년 5월</h1>
      <div className="w-3/12 justify-end flex">
        <button className="px-5 py-2.5 bg-[#ececec] rounded whitespace-nowrap">&gt;</button>
      </div>
    </header>
  );
};

export default Header;
