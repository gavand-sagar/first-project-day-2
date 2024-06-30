import { Avatar, Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';

export default function ApiTest() {


    const [response, setResponse] = useState("")
    async function onload() {
        let result = await axios.get('https://randomuser.me/api/');
        let obj = result.data.results[0]
        setResponse(obj)
    }


    const [products, setProducts] = useState([])
    async function loadProducts() {
        let result = await axios.get('https://dummyjson.com/products');
        setProducts(result.data.products)
    }
    return (
        <div>
            {/* <hr />
            <button onClick={onload}>CLICK ME</button>
            <br />
            <hr /><p>{response?.name?.title} {response?.name?.first} {response?.name?.last}</p>
            <p>{response?.location?.city}, {response?.location?.country}</p>
            <Avatar src={response?.picture?.large} /> */}
            <button onClick={loadProducts}>Load Products</button>
            <hr/>
            {
                products.map(x => <SingleProduct obj={x} />)
            }
        </div>
    )
}
