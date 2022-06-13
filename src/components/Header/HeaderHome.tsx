import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/modules";
import { plus, minus } from "store/modules/time";
const HeaderHome = ({ dispatch }: any) => {
  const timedata = useSelector(({ time }: RootState) => time);
  if (!timedata) return <></>;

  return (
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
      <h1 className="w-1/2 text-2xl justify-center font-bold flex">
        {new Date(timedata).toLocaleDateString("ko-KR", { year: "numeric", month: "long" })}
      </h1>
      <div className="w-3/12 justify-end flex">
        <button onClick={() => dispatch(plus())} className="px-5 py-2.5 bg-[#ececec] rounded whitespace-nowrap">
          &gt;
        </button>
      </div>
    </>
  );
};

export default HeaderHome;
