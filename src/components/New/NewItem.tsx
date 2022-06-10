import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "store/modules/diary";
import { emotionList } from "util/emotion";
import { RootState } from "store/modules";
import { useLocation, useNavigate, matchPath } from "react-router-dom";
import EmotionItem from "components/New/EmotionItem";
import { useEffect } from "react";

const getStringDate = (date: Date) => {
  return date.toISOString().slice(0, 10);
};

const NewItem = () => {
  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState<number>(3);
  const [content, setContent] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const contentRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const dataId = useRef(0);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setId((prev) => prev + 1);
  }, []);
  const handleClickEmote = (emotion: any) => {
    setEmotion(emotion);
  };
  const monthDate = useSelector(({ time }: RootState) => time);
  const diary = useSelector(({ diary }: RootState) => diary);

  const onClickSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    // dispatch(create({ date, content, emotion, dataId: dataId.current + 1 }));

    dispatch(create(date, content, emotion, id));
    navigation("/", { replace: true });
  };
  // console.log(content);

  return (
    <>
      <div className="mb-[40px]">
        <h1 className="h1text">오늘은 언제 인가요?</h1>
        <input
          type="date"
          defaultValue={date}
          onChange={(e) => setDate(e.target.value)}
          className="text-[20px] py-1.5 px-5 bg-[#ececec] rounded"
        />
      </div>
      {/* {console.log(new Date(date).getTime())} */}
      <div className="mb-[40px]">
        <h1 className="h1text">오늘의 감정</h1>
        <div className="grid grid-cols-5 gap-[2%]">
          {emotionList.map((value, i) => (
            <EmotionItem key={i} {...value} onClick={handleClickEmote} isSelected={value.id === emotion} />
            //  emotionList의 여러 요소들(객체)을 EmotionComponent props로 넘겨줄때 {...value}로 사용함.
          ))}
        </div>
      </div>
      <div className="mb-[40px]">
        <h1 className="h1text">오늘의 일기</h1>
        <textarea
          className="w-full bg-[#ececec] rounded-[5px] p-5 min-h-[200px] text-[20px]"
          placeholder="오늘은 어땠나요?"
          ref={contentRef}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-[40px]">
        <div className="flex justify-between items-center">
          <button className="grayBtn" onClick={() => navigation(-1)}>
            취소하기
          </button>
          <button className="grayBtn bg-[#64c964] text-white" onClick={onClickSubmit}>
            작성완료
          </button>
        </div>
      </div>
    </>
  );
};

export default NewItem;
