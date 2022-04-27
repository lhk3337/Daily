export interface IFdata {
  author: string;
  content: string;
  emotion: number;
  create_date: number;
  id: number;
}
export interface IDailyListprops {
  Fdata: IFdata[];
}
