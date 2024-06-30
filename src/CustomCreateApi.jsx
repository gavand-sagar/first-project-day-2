import axios from 'axios';
import React, { useState } from 'react'

export default function CustomCreateApi() {
    const [name, setName] = useState("");
    async function postEmployee() {
        let obj = {
            name: name
        };

        try {
            await axios.post("http://localhost:8080/add-employee", obj);

            alert("Record Added")
        }
        catch (e) {

        }

    }
    return (
        <div>
            <h1>Custome Create</h1>
            <hr />
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={postEmployee}>Save</button>

        </div>
    )
}
