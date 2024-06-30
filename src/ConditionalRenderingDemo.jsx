import React, {  useState } from 'react'
import Header from './common/Header';
import { useRouteProtection } from './common/useRouteProtection';

export default function ConditionalRenderingDemo() {
    
    useRouteProtection()

    let [flag, setFlag] = useState(true);
    function handleClick() {
        // if (flag == true) {
        //     setFlag(false)
        // } else {
        //     setFlag(true)
        // }
        setFlag(!flag)
    }
    return (
        <div>
            <Header/>
            Some Text <button onClick={handleClick}>Click Me</button>
            <hr />

            {/* {
                (flag == true)?<p>test para</p>:<></>
            } */}

            <p className={(flag == true ? 'para' : 'para hidden')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut doloribus rerum commodi vero expedita culpa.
            </p>

            <p className={(flag == true ? 'para' : 'para hidden')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut doloribus rerum commodi vero expedita culpa.
            </p>


            <p className={(flag == true ? 'para' : 'para hidden')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut doloribus rerum commodi vero expedita culpa.
            </p>


            <p className={(flag == true ? 'para' : 'para hidden')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut doloribus rerum commodi vero expedita culpa.
            </p>
            <p className={(flag == true ? 'para' : 'para hidden')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut doloribus rerum commodi vero expedita culpa.
            </p>
            <p className={(flag == true ? 'para' : 'para hidden')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut doloribus rerum commodi vero expedita culpa.
            </p>
            <p className={(flag == true ? 'para' : 'para hidden')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut doloribus rerum commodi vero expedita culpa.
            </p>
            <p className={(flag == true ? 'para' : 'para hidden')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut doloribus rerum commodi vero expedita culpa.
            </p>
            <p className={(flag == true ? 'para' : 'para hidden')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut doloribus rerum commodi vero expedita culpa.
            </p>
            <p className={(flag == true ? 'para' : 'para hidden')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut doloribus rerum commodi vero expedita culpa.
            </p>
            <p className={(flag == true ? 'para' : 'para hidden')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut doloribus rerum commodi vero expedita culpa.
            </p>
            <p className={(flag == true ? 'para' : 'para hidden')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut doloribus rerum commodi vero expedita culpa.
            </p>
        </div>
    )
}




