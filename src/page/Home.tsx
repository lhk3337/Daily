import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store/modules";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" },
];

const ControlMenu = ({ value, onChange, optionList }: any) => {
  return (
    <select value={value} onChange={(e) => onChange(e.currentTarget.value)}>
      {optionList.map((it: any, idx: number) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const Home = () => {
  const navi = useNavigate();
  const state: [] = useSelector(({ diary }: RootState) => diary);
  const times = useSelector(({ time }: RootState) => time);

  const [data, setData] = useState<IData[]>([]); // 내림차순으로 data 정렬

  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");
  interface IData {
    id: number;
    content: string;
    emotion: number;
    date: number;
  }

  const originData = () => {
    const dateMonthFilter = state.filter(
      (item: IData) => new Date(item.date).getMonth() === new Date(times).getMonth()
    );
    const init = dateMonthFilter.sort((a: any, b: any) => b.date - a.date);
    return init;
  };

  useEffect(() => {
    setData(originData());
  }, [times]);

  const getProcessedDiaryList = () => {
    const filterCallBack = (item: any) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const compare = (a: any, b: any) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    const filteredList = filter === "all" ? copyList : copyList.filter((it: any) => filterCallBack(it));
    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  const emotionNumber = ["엄청 좋음", "좋음", "그냥", "나쁨", "엄청나쁨"];
  return (
    <div className="mt-[20px] mb-[30px]">
      <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
      <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />
      <button
        className="w-[232px]  bg-[#64C964] rounded px-5 py-2.5 text-white box-border text-lg"
        onClick={() => navi("/new")}
      >
        새 일기쓰기
      </button>
      <ul>
        {getProcessedDiaryList().map((item: any, idx: number) => (
          <li key={idx}>
            <h1>{item.content}</h1>
            <h2>
              {new Date(item.date).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })}
            </h2>
            <h3>{emotionNumber[item.emotion - 1]}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
