import React, { useState, useEffect } from "react";

const LifeCycle = () => {
  const [visible, setVisible] = useState(false);

  const Unmount = () => {
    useEffect(() => {
      console.log("Mount");
      return () => {
        console.log("Unmount");
      };
    }, []);

    return <div>Unmount Testing</div>;
  };
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setVisible(!visible)}>ON/OFF</button>
      {visible && <Unmount />}
    </div>
  );
};

export default LifeCycle;
