const PLUS = "PLUS" as const;
const MINUS = "MINUS" as const;

export const plus = () => ({ type: PLUS });
export const minus = () => ({ type: MINUS });

type timeAction = ReturnType<typeof plus> | ReturnType<typeof minus>;

export default function Diary(state: any = new Date(), action: timeAction) {
  switch (action.type) {
    case PLUS:
      return new Date(state.getFullYear(), state.getMonth() + 1, state.getDate());
    case MINUS:
      return new Date(state.getFullYear(), state.getMonth() - 1, state.getDate());
    default:
      return state;
  }
}