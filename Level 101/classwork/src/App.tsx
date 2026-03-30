import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 4);
    console.log(count);
  };

  return (
    <>
      <div>
        <div>{count}</div>
        <button onClick={handleClick}>cick</button>
      </div>
    </>
  );
}

export default App;
