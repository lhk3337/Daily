import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
const Home = () => {
  const navi = useNavigate();

  return (
    <div>
      <button
        className="w-[232px]  bg-[#64C964] rounded px-5 py-2.5 text-white box-border text-lg"
        onClick={() => navi("/new")}
      >
        새 일기쓰기
      </button>
    </div>
  );
};

export default Home;
