import "./styles.css";
import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useReducer,
  useRef,
} from "react";
const Timmer = () => {
  const [count, set] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      set((count) => count + 1);
    }, []);
    return () => clearTimeout(timer);
    // memory leakage
  }, []);
  return (
    <>
      <h1 style={{ color: "green" }}>By using UseEffect</h1>
      <button>{count}</button>
    </>
  );
};
const DoMMer = () => {
  const [count, setcou] = useState(0);
  const Hear = () => {
    setcou(count + 1);
  };
  const Hat = () => {
    setcou(count - 1);
  };
  return (
    <div>
      <h1 style={{ color: "orange" }}>By Using UseState</h1>
      <div>{count}</div>
      <button onClick={Hear}>+</button>
      <button onClick={Hat}>-</button>
    </div>
  );
};
const WithMemo = () => {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  const computeExpensiveValue = (num) => {
    console.log("Computing...");
    let result = 0;
    for (let i = 0; i < 10000; i++) {
      result += num;
    }
    return result;
  };

  // Using useMemo to memoize the result based on count
  const result = useCallback(() => computeExpensiveValue(count), [count]);

  return (
    <div>
      <h2 style={{ color: "gray" }}>With Memo Example And Call Back</h2>
      <p>Count: {count}</p>
      <p>Result: {result}</p>
      <p>Render Count: {renderCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Increment Render Count
      </button>
    </div>
  );
};
const initial = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "substract":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("unexpected error");
  }
};
const Dark = () => {
  const [count, dispatch] = useReducer(reducer, initial);
  return (
    <div>
      <h1>Use Reducer</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch("add")}>add</button>
      <button onClick={() => dispatch("substract")}>Substract</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
const Ref = () => {
  const [input, setinput] = useState("");
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <h1>Render count:{count.current}</h1>
    </>
  );
};
export { Ref };
export { Dark };
export { WithMemo };
export default Timmer;
export { DoMMer };
