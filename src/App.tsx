import { useRef, useEffect, useMemo, useCallback, useReducer } from "react";
import DailyEditor from "Components/DailyEditor";
import { IFdata, IapiData } from "types";
import "styles/App.css";
import DailyList from "Components/DailyList";

interface Action {
  type?: string;
  data?: IFdata;
  id?: number;
  newContent?: string;
}

const reducer = (state: IFdata[], action: Action): any => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE":
      const created_date = new Date().getTime();
      const newitem = {
        ...action.data,
        created_date,
      };
      return [newitem, ...state];
    case "DELETE":
      return state.filter((item: IFdata) => item.id !== action.id);
    case "EDIT":
      return state.map((value: IFdata) => (value.id === action.id ? { ...value, content: action.newContent } : value));
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, []);
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
      dispatch({ type: "INIT", data: initData });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const createContent = useCallback((author: string, content: string, emotion: number) => {
    const create_date = new Date().getTime();
    dateId.current += 1;
    dispatch({ type: "CREATE", data: { author, content, emotion, create_date, id: dateId.current } });
  }, []);
  //함수를 최적화, e.target.value값이 state배열에 하나만 확인 <- useCallback(()=>{... setState([newItem, ...state]) },[])

  const onDelClick = useCallback((id: number) => {
    dispatch({ type: "DELETE", id });
  }, []);

  const onEditClick = useCallback((id: number, newContent: string) => {
    dispatch({ type: "EDIT", id, newContent });
  }, []);
  // App의id와 DailyItem의 id가 같으면 content의 값을 DailyItem에서 수정한 값으로 교체 아니면 그대로 유지

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = state.filter((value: IFdata) => value.emotion >= 3).length;
    const badCount = state.length - goodCount;
    const goodRatio = (goodCount / state.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [state]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;
  //useMemo를 선언하지 않았으면 input에 입력하면 getDiaryAnalysis도 같이 리 랜더링
  // 그렇기 떄문에 getDiaryAnalysis에 useMemo를 선언하면 input에 입력해도 리 랜더링 되지 않고 리스트의 상태변화가 있을 시 리렌더링 됨
  return (
    <div className="App">
      <DailyEditor createContent={createContent} />
      <div>전체 일기 : {state.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DailyList Fdata={state} onDelClick={onDelClick} onEditClick={onEditClick} />
    </div>
  );
}

export default App;
