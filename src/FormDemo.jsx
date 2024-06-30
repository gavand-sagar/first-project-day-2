import React, { useState } from 'react'

export default function FormDemo() {

    let [type, setType] = useState("password");
    function handleClick() {
        if (type == 'text') {
            setType("password")
        } else {
            setType('text')
        }
    }

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [dob, setDOB] = useState("")
    let [range, setRange] = useState(0);
    let [city, setCity] = useState("")


    function handleSubmit() {
        let obj = {
            username,
            password,
            dob,
            range,
            city
        };
        console.log(obj)
    }

    return (
        <div>
            <label>Username</label>
            <input value={username} type='text' onChange={event => setUsername(event.target.value)} />
            {username == "" ? <span>Required</span> : <></>}
            {username.length > 10 ? <span>Maximum 10 letters</span> : <></>}
            <br />
            <br />
            <label>Password</label>
            <input value={password} type={type} onChange={event => setPassword(event.target.value)} />
            <button onClick={handleClick}>
                {type == "text" ? "Hide" : "Show"}
            </button><br />
            <br />
            <label>Date of Birth</label>
            <input value={dob} type="date" onChange={event => setDOB(event.target.value)} />
            <br />
            <br />
            <label>Range Example</label>
            <input value={range} min={0} step={25} max={100} type="range" onChange={event => setRange(event.target.value)} />

            <br />
            <br />
            <label>City</label>
            <select value={city} onChange={event => setCity(event.target.value)}>
                <option value="">Select City</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
            </select>

            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>

            <hr />
            <div>username: {username}</div>
            <div>password: {password}</div>
            <div>dob: {dob}</div>
            <div>dob: {dob}</div>
            <div>range: {range}</div>
            <div>city: {city}</div>
        </div>
    )
}



{/* <input type='radio' name="grp1"/>
        <input type='radio' name="grp1"/>
        <input type='radio' name="grp1"/>

        <hr/>
        <input type="checkbox" name="grp2" id="" />
        <input type="checkbox" name="grp2" id="" />
        <input type="checkbox" name="grp2" id="" />

        <hr/>
        <input type='date'/>

        <hr/>
        <input type="text" name="" id="" />

        <hr/>
        <input type="password" name="" id="" />

        <hr/>
        <input type="number" name="" id="" />

        <hr/>
        <input type="range" name="" id="" />

        <hr/>
        <input type='color'/>


        <hr/>
        <select>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Chennai</option>
            <option>Kolkata</option>
        </select>

        <hr/>
        <select multiple>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Chennai</option>
            <option>Kolkata</option>
        </select> */}