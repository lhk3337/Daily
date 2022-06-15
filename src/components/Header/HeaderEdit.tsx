import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove } from "store/modules/diary";
const HeaderEdit = ({ Navi, location }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = location.pathname.match(/\d+/g)[0]; // /edit/12에서 숫자만 추출하도록 정규식 표현 사용

  const onClickDel = () => {
    dispatch(remove(parseInt(id)));
    navigate("/", { replace: true });
  };

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
      <h1 className="w-1/2 text-2xl justify-center font-bold flex">일기 수정하기</h1>
      <div className="w-3/12 justify-end flex">
        <button className="px-5 py-2.5 bg-[#fd565f] rounded whitespace-nowrap text-white" onClick={onClickDel}>
          삭제하기
        </button>
      </div>
    </>
  );
};

export default HeaderEdit;
