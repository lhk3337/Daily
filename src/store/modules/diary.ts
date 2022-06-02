const INIT = "INIT";
const CREATE = "CREATE";
const REMOVE = "REMOVE";
const EDIT = "EDIT";

const dummyData = [
  { id: 0, content: "오늘의 일기 0번", emotion: 3, date: 1650646723014 },
  { id: 1, content: "오늘의 일기 1번", emotion: 5, date: 1651656764897 },
  { id: 2, content: "오늘의 일기 2번", emotion: 1, date: 1652656786274 },
  { id: 3, content: "오늘의 일기 3번", emotion: 4, date: 1652756799088 },
  { id: 4, content: "오늘의 일기 4번", emotion: 2, date: 1652856810527 },
];

interface IdummyDataData {
  id: number;
  date: number;
  content: string;
  emotion: number;
}

interface IdummyDataDatas extends Array<IdummyDataData> {}

interface actionType {
  type: string;
  data: { id: number; date: number; content: string; emotion: number };
  targetId?: string;
  date?: Date;
}

// 액션 생성 함수
export const init = () => ({ type: INIT, data: dummyData });

export const edit = (targetId: string, date: Date, content: string, emotion: number) => ({
  type: EDIT,
  data: { id: targetId, date: new Date(date).getTime(), content, emotion },
});

export const remove = (targetId: string) => ({ type: REMOVE, targetId: targetId });

export const create = (
  date: Date,
  content: string,
  emotion: number,
  dataId: React.MutableRefObject<number>
): actionType => ({
  type: CREATE,
  data: { id: dataId.current, date: new Date(date).getTime(), content, emotion },
});

export default function Diary(state: IdummyDataDatas = dummyData, action: actionType) {
  let newState = [];
  switch (action.type) {
    case INIT: {
      return action.data;
    }
    case CREATE: {
      newState = [action.data, ...state];
      break;
    }
    case REMOVE: {
      newState = state.filter((it: any) => it.id !== action.targetId);
      break;
    }
    case EDIT: {
      newState = state.map((it: any) => (it.id === action.data.id ? { ...action.date } : it));
      break;
    }
    default:
      return state;
  }

  return newState;
}
