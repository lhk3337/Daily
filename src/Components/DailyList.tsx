import DailyItem from "./DailyItem";
import { IDailyListprops, IFdata } from "types";

const DailyList = ({ Fdata, onDelClick }: IDailyListprops) => {
  console.log(Fdata);
  // console.log(Fdata.filter((data: IFdata) => data.id === 0));
  return (
    <div className="DailyList">
      <h1>일기 리스트</h1>
      <div>
        <h2>게시물 {Fdata.length}개</h2>
        <ul>
          {Fdata.map((data: IFdata) => (
            <DailyItem key={data.id} {...data} onDelClick={onDelClick} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default DailyList;
