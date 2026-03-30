import { usrState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handle = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div id="Counter">{count}</div>
      <button id="inc" onClick={handle}>
        inc
      </button>
    </>
  );
}
export default App;
