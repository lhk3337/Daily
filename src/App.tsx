import { useState, useRef, useEffect } from "react";
import DailyEditor from "Components/DailyEditor";
import { IFdata, IapiData } from "types";
import "styles/App.css";
import DailyList from "Components/DailyList";

function App() {
  const [state, setState] = useState<IFdata[]>([]);

  const dateId = useRef(0);

  const getData = async () => {
    try {
      const response = await (await fetch(`https://jsonplaceholder.typicode.com/comments`)).json();
      const initData = response.slice(0, 20).map((value: IapiData) => {
        return {
          author: value.email,
          content: value.body,
          emotion: Math.floor(Math.random() * 5) + 1,
          create_date: new Date().getTime(),
          id: dateId.current++,
        };
      });
      setState(initData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const createContent = (author: string, content: string, emotion: number) => {
    const create_date = new Date().getTime();
    const newItem: IFdata = {
      author,
      content,
      emotion,
      create_date,
      id: dateId.current,
    };
    dateId.current += 1;
    setState([newItem, ...state]);
  };

  const onDelClick = (id: number) => {
    setState(state.filter((item: IFdata) => item.id !== id));
  };
  const onEditClick = (id: number, newContent: string) => {
    setState(state.map((value: IFdata) => (value.id === id ? { ...value, content: newContent } : value)));
    // App의id와 DailyItem의 id가 같으면 content의 값을 DailyItem에서 수정한 값으로 교체 아니면 그대로 유지
  };
  return (
    <div className="App">
      <DailyEditor createContent={createContent} />
      <DailyList Fdata={state} onDelClick={onDelClick} onEditClick={onEditClick} />
    </div>
  );
}

export default App;
