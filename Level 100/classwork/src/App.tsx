import "./App.css";

function App() {
  const fullname = "davit grdzelishvili";
  const numb1 = 42;
  const numb2 = 58;
  const sum = numb1 + numb2;

  return (
    <div>
      <h1
        className="lomi"
        style={{
          fontSize: "10px",
          color: "red",
          border: "1px solid blue",
          borderRadius: "20px",
        }}
      >
        Fullname: {fullname}
      </h1>
      <h2
        style={{
          fontSize: "16px",
          color: "green",
          border: "1px solid black",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        numb1: {numb1}, numb2: {numb2}, Sum: {sum}
      </h2>
    </div>
  );
}

export default App;
