import React, {useState} from 'react'

export default function HookCounterFour() {
    const [items, setItems] = useState([12])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value : Math.floor(Math.random()*10)
        }])

    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item =>(
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
            
        </div>
    )
}
