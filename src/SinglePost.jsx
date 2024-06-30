import React from 'react'

export default function SinglePost({obj}) {    
    return (
        <div className='post-container'>
            {
                obj?.tags?.join(",")
            }
            <h2>{obj?.title}</h2>
            <p>{obj?.body}</p>
            <div>
                { obj?.views } Views |  { obj?.reactions?.likes } Likes

                
            </div>
        </div>
    )
}
