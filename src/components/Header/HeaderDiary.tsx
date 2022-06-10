import React from "react";
import { useSelector } from "react-redux";
import { PathMatch } from "react-router-dom";
import { RootState } from "store/modules";
import { elementDataType } from "store/modules/diary";
interface Iprops {
  Navi: any;
  pathInfo: PathMatch<string>;
}

const HeaderDiary = ({ Navi, pathInfo }: Iprops) => {
  const {
    params: { id },
  } = pathInfo;
  const diary = useSelector(({ diary }: RootState) => diary);

  const userData = diary?.filter((it: elementDataType) => it.id === Number(id));
  const { date } = userData[0];
  const offset = new Date().getTimezoneOffset() * 60000;

  return (
    <>
      <div className="w-3/12 justify-start flex">
        <button
          onClick={() => {
            Navi(-1);
          }}
          className="grayBtn"
        >
          &lt; 뒤로가기
        </button>
      </div>
      <h1 className="w-1/2 text-2xl justify-center font-bold flex">
        {new Date(date - offset).toISOString().slice(0, 10)} 기록
        {/* offset을 빼지않으면 하루전 출력, toISOString함수는 UTC시간을 기준으로 반환하기 때문인데, 한국 시간과 9시간 차이가 남 */}
      </h1>
      <div className="w-3/12 justify-end flex">
        <button
          onClick={() => {
            Navi(`/edit/${id}`);
          }}
          className="grayBtn"
        >
          수정하기
        </button>
      </div>
    </>
  );
};

export default HeaderDiary;
