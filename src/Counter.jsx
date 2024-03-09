import { useState } from "react"

export default function Counter() {
    const counterDiv = {
        border: '2px solid blue',
        margin: '10px',
        padding: '10px',
        borderRadius: '15px',
    }
    const [count, setCount] = useState(0);
    // const handleCount = () => {
    //     setCount(() => {
    //         return count + 1;
    //     })
    // }
    const handleCount = () => {
        setCount(count + 1);
    }
    const handleCount2 = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={counterDiv}>
            <h3>Counter: {count}</h3>
            <button onClick={handleCount}>Increase count by 1</button>
            <button onClick={handleCount2}>Decrease count by 1</button>
        </div>
    )
}