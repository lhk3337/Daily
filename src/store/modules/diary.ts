import { actionType, elementDataType } from "store/types";
const CREATE = "CREATE";
const REMOVE = "REMOVE";
const EDIT = "EDIT";

// export interface elementDataType {
//   id: number;
//   content?: string;
//   emotion?: number;
//   date: number;
// }

// interface actionType {
//   type: string;
//   data: { id: number; date: number; content: string; emotion: number };
//   targetId?: number;
//   date?: Date;
// }

// 액션 생성 함수 ====================================================================================================

export const edit = (targetId: number, date: string, content: string, emotion: number) => {
  // console.log(date, targetId, content, emotion);
  return {
    type: EDIT,
    data: { id: targetId, content: content, emotion: emotion, date: new Date(date).getTime() },
  };
};

export const remove = (targetId: number) => ({ type: REMOVE, targetId: targetId });

export const create = (date: string, content: string, emotion: number) => {
  return {
    type: CREATE,
    data: { id: new Date().getTime(), content: content, emotion: emotion, date: new Date(date).getTime() },
  };
};

// ================================================================================================================

export default function Diary(state: elementDataType[] = [], action: actionType): elementDataType[] {
  let newState = [];
  switch (action.type) {
    case CREATE: {
      newState = [action.data, ...state];
      break;
    }
    case REMOVE: {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case EDIT: {
      newState = state.map((it) => (it.id === action.data.id ? { ...action.data } : it));
      break;
    }
    default:
      return state;
  }
  console.log(newState);
  return newState;
}
