const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";
export const emotionList = [
  { id: 1, imgUrl: `${process.env.PUBLIC_URL}/assets/emotion1.png`, title: "완전 좋음", bgColor: "bg-[#64C965]" },
  { id: 2, imgUrl: `${process.env.PUBLIC_URL}/assets/emotion2.png`, title: "좋음", bgColor: "bg-[#9DD772]" },
  { id: 3, imgUrl: `${process.env.PUBLIC_URL}/assets/emotion3.png`, title: "그저그럭", bgColor: "bg-[#FECE15]" },
  { id: 4, imgUrl: `${process.env.PUBLIC_URL}/assets/emotion4.png`, title: "나쁨", bgColor: "bg-[#FD8446]" },
  { id: 5, imgUrl: `${process.env.PUBLIC_URL}/assets/emotion5.png`, title: "끔찍함", bgColor: "bg-[#FD565F]" },
];
