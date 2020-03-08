import React, {useState, useEffect} from 'react'

export default function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e =>{
        console.log("mouse event halliyo")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffeccettt called")
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log("unmounting component guys")
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])


    return (
        <div>
            Hooks X- {x}::: Y - {y}
            
        </div>
    )
}
