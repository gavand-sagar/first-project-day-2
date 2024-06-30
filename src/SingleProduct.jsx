import React from 'react'

export default function SingleProduct({obj}) {
    return (
        <div className='product'>
            <div className='status'>{obj?.availabilityStatus}</div>
            <h2>{obj?.title}</h2>
            <h3>{obj?.brand}</h3>
            <img src={obj?.thumbnail}/>
            <h2>$ {obj?.price}</h2>
            <p>{obj?.description}</p>
        </div>
    )
}
