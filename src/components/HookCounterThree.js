import React, {useState} from 'react'

export default function HookCounterThree() {
    const [name, setName] = useState({
        fname : '',
        lname : ''
    })

    return (
        <div>
            <input type='text'
            value={name.fname}
            onChange={e => setName({...name,fname:e.target.value})}
            ></input>
            <input type='text' 
            value={name.lname}
            onChange={c => setName({...name,lname: c.target.value})}
            ></input>
            <h3>first name:{name.fname}</h3>
            <h3>last name:{name.lname}</h3>
            
        </div>
    )
}
