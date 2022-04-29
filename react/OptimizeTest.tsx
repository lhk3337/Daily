import React, { useState, useEffect } from "react";

const CountA = React.memo(({ count }: any) => {
  useEffect(() => {
    console.log(`CountA : ${count}`);
  });
  return <div>{count}</div>;
});

const CountB = ({ obj }: any) => {
  useEffect(() => {
    console.log(`CountB : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps: any, nextProps: any) => {
  //   if (prevProps.obj.count === nextProps.obj.count) {
  //     return true;
  //   }
  //   return false;  return prevProps.obj.count === nextProps.obj.count;와 같음
  return prevProps.obj.count === nextProps.obj.count;

  //   return true; //  prevProps === nextProps -> 리렌더링을 일으키지 않게 됨
  //   return false; // prevProps !== nextProps -> 리렌더링을 일으킴
};

const MemoizedCounterB = React.memo(CountB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState<number>(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Count A</h2>
        <CountA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;

// React.memo 얕은 복사일떄는 렌더링이 일아나고 깊은 복사일떄는 리렌더링이 일어나지 않는다.
