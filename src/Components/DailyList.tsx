import DailyItem from "./DailyItem";
import { IDailyListprops, IFdata } from "types";

const DailyList = ({ Fdata }: IDailyListprops) => {
  console.log(Fdata);

  return (
    <div className="DailyList">
      <h1>일기 리스트</h1>
      <div>
        <h2>게시물 {Fdata.length}개</h2>
        <ul>
          {Fdata.map((data: IFdata) => (
            <DailyItem key={data.id} {...data} />
            /*
            <DailyItem
              id={data.id}
              author={data.author}
              content={data.content}
              emotion={data.emotion}
              create_date={data.create_date}
            />
            === <DailyItem {...data} />
            */
          ))}
        </ul>
      </div>
    </div>
  );
};
export default DailyList;
