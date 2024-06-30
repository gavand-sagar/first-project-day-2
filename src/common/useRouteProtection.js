import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//custom hook
export function useRouteProtection(){
    useEffect(onFirstLoad,[]);
    const navigate = useNavigate();

    function onFirstLoad(){
        if(localStorage.getItem("isLoggedin") != "true"){
            // redirect to login
            navigate("/login")
        }    
    }
}