import axios from 'axios';
import React, { useState } from 'react'

export default function CustomApi() {
    const [employees, setEmployees] = useState([]);
    async function loadEmployees(){
        let result = await axios.get("http://localhost:8080/get-employees");
        setEmployees(result.data)
    }
    return (
        <div>
            <h1>CustomApi</h1>
            <hr/>
            <button onClick={loadEmployees}>Load Data</button>
            <hr/>

            {
                employees.map(x=><p>{x.name}</p>)
            }
        </div>
    )
}
