import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store/modules";
const Home = () => {
  const navi = useNavigate();
  const state = useSelector(({ diary }: RootState) => diary.data);
  const times = useSelector(({ time }: RootState) => time);

  useEffect(() => {});

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
          <li key={idx}>
            <h1>{item.content}</h1>
            <h2>
              {new Date(item.date).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
