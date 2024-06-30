import React, { useState } from 'react'

export default function ClickDemo() {

    // let counter = 0;  this way will not force re-render of UI
    // so we need to create the variable in special manner
    // these type of variables are called "State"
    let [counter,setCounter] = useState(0)

    function handleClick() {
        setCounter( counter + 1)
    }

    return (
        <div>
            <h1>ClickDemo - {counter}</h1>
            <hr />
            <button onMouseEnter={handleClick}>Click me</button>
        </div>
    )
}
