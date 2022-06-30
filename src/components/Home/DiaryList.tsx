import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store/modules";
import { elementDataType } from "store/types";
import DiaryItem from "./DiaryItem";
import { IoptionList, IControlType, IsortedList } from "types/type";
import { sortOptionList, filterOptionList } from "util/optionList";

const ControlMenu = ({ value, onChange, optionList }: IControlType) => {
  return (
    <select
      className="bg-[#ececec] px-5 py-2.5 rounded text-lg mr-3 leading-none h-auto"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    >
      {optionList.map((it: IoptionList, idx: number) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = () => {
  const navi = useNavigate();

  const state = useSelector(({ diary }: RootState) => diary);
  const times = useSelector(({ time }: RootState) => time);

  const [data, setData] = useState<elementDataType[]>([]); // 내림차순으로 data 정렬
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const originData = () => {
    const dateMonthFilter = state.filter(
      (item: elementDataType) =>
        new Date(item.date).getMonth() === new Date(times).getMonth() &&
        new Date(item.date).getFullYear() === new Date(times).getFullYear()
    );
    const init = dateMonthFilter.sort((a: IsortedList, b: IsortedList) => b.date - a.date);
    return init;
  };

  useEffect(() => {
    setData(originData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [times]);

  const getProcessedDiaryList = () => {
    const filterCallBack = (item: IsortedList) => {
      if (filter === "good") {
        return item.emotion <= 3;
      } else {
        return item.emotion > 3;
      }
    };

    const compare = (a: IsortedList, b: IsortedList) => {
      if (sortType === "latest") {
        return b.date - a.date;
      } else {
        return a.date - b.date;
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    const filteredList = filter === "all" ? copyList : copyList.filter((it: IsortedList) => filterCallBack(it));
    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <>
      <div className="flex justify-between mt-[20px] mb-[30px] items-center">
        <div>
          <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
          <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />
        </div>
        <div className="flex-grow">
          <button
            className="bg-[#64C964] rounded px-5 py-2 text-white text-[18px] w-full h-auto"
            onClick={() => navi("/new")}
          >
            새 일기쓰기
          </button>
        </div>
      </div>
      {getProcessedDiaryList().map((item: IsortedList) => (
        <DiaryItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default DiaryList;
