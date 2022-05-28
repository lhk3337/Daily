import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { plus, minus } from "store/modules/time";
const Header = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const Navi = useNavigate();

  const date = useSelector(({ time }: any) => time);

  return (
    <header className="flex py-5 border-b border-[#e2e2e2] items-center  w-full">
      {location.pathname === "/" ? (
        <>
          <div className="w-3/12 justify-start flex">
            <button
              onClick={() => {
                dispatch(minus());
              }}
              className="px-5 py-2.5 bg-[#ececec] rounded whitespace-nowrap"
            >
              &lt;
            </button>
          </div>
          <h1 className="w-1/2 text-2xl justify-center font-bold flex">{`${date.getFullYear()}년 ${
            date.getMonth() + 1
          }월`}</h1>
          <div className="w-3/12 justify-end flex">
            <button onClick={() => dispatch(plus())} className="px-5 py-2.5 bg-[#ececec] rounded whitespace-nowrap">
              &gt;
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="w-3/12 justify-start flex">
            <button
              onClick={() => {
                Navi("/");
              }}
              className="px-5 py-2.5 bg-[#ececec] rounded whitespace-nowrap"
            >
              &lt; 뒤로가기
            </button>
          </div>
          <h1 className="w-1/2 text-2xl justify-center font-bold flex">새 일기쓰기</h1>
        </>
      )}
    </header>
  );
};

export default Header;
