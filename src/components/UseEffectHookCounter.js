import React, { useState, useEffect } from 'react'

export default function UseEffectHookCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect( ()=> {
        console.log("updating doc title from hook")
        document.title = `you clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} 
            onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(count+1)}>Click {count} times</button>
        </div>
    )
}
