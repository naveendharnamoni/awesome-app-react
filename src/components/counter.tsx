import type React from "react"
import { useState } from "react"

interface CounterProps{
    initCount: number
}
const Counter: React.FC<CounterProps> = ({initCount}) =>{
    const [count, setCount] = useState(initCount);

    function increment(){
        setCount(count + 1);
        console.log("count value", count);
        setCount((count) =>{
            console.log("count value", count);
            return count + 1
        })
    }
    return(
        <div>
            <h4>count: {count}</h4>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <input type="number" name="" id="" onChange={(evt) => setCount(evt.target.valueAsNumber)} value={count}/>
            </div>
        </div>
    )
}

export default Counter;