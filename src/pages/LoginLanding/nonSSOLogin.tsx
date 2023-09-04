import React from "react";
import { useNavigate } from "react-router-dom";

function NonSsoLogin(){
    const navigate = useNavigate();
    return(
        <>
        <button onClick={() => navigate('/')}>Back to Login</button>
        <h1>Code for non sso login goes here</h1>
        </>
    )
}
export default NonSsoLogin;