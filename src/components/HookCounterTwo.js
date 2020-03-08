import React,{ useState } from 'react'

export default function HookCounterTwo() {
    const [count, setCount] = useState(0)

    const incFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount+1)
        }

    }

    return (
        <div>
            Count : {count}
            <button onClick={()=> setCount(prevCount => prevCount+1)}>Increment Count </button>
            <button onClick={()=> setCount(prevCount => prevCount-1)}>Decrement Count </button>
            <button onClick={()=> setCount(0)}>Reset Count </button>
            <button onClick={incFive}>Increment by 5 </button>

        </div>
    )
}
