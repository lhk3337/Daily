const PLUS = "PLUS";
const MINUS = "MINUS";

export const plus = () => ({ type: PLUS });
export const minus = () => ({ type: MINUS });

export default function Diary(state: any = new Date(), action: any) {
  switch (action.type) {
    case PLUS:
      return new Date(state.getFullYear(), state.getMonth() + 1, state.getDate());
    case MINUS:
      return new Date(state.getFullYear(), state.getMonth() - 1, state.getDate());
    default:
      return state;
  }
}
