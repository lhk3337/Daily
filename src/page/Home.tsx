import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const navi = useNavigate();

  const state = useSelector(({ diary }: any) => diary.data);

  console.log(state);

  return (
    <div className="mt-[20px] mb-[30px]">
      <button
        className="w-[232px]  bg-[#64C964] rounded px-5 py-2.5 text-white box-border text-lg"
        onClick={() => navi("/new")}
      >
        새 일기쓰기
      </button>
      <ul>
        {state.map((item: any, idx: number) => (
          <li key={idx}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
