import type React from "react";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  initCount: number;
}
const Counter: React.FC<CounterProps> = ({ initCount }) => {
  const [count, setCount] = useState(initCount);
  let clickCount = useRef(0);
    useEffect(() =>{
        console.log("Count Updated");
        
    }, [count])

  function increment() {
    setCount(count + 1);
    console.log("count value", count);
    // setCount((count) => {
    //   console.log("count value", count);
    //   return count + 1;
    // });
    clickCount.current++;
    console.log("clickcount", clickCount.current);
    
  }
  return (
    <div>
      <h4>count: {count}</h4>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <input
          type="number"
          name=""
          id=""
          onChange={(evt) => setCount(evt.target.valueAsNumber)}
          value={count}
        />
      </div>
    </div>
  );
};

export default Counter;
