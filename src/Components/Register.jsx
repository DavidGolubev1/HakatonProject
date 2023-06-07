import { Link } from "react-router-dom";
import "./../Style/Register.css"
import { useState } from "react";

function Register() {
    const [registedName , setRegistedName]=useState("")
    const [registedPassword , setRegistedPassword]=useState("")
    
    // function checkAndSign (){
    //     if(registedName.length>3){
    //         if(registedPassword>4){
                
    //         } else {
    //             alert()
    //         }
    //     } else{
    //         alert()
    //     }
    // }
    
    return (
        <div id="register-page">
            <h1>Sign up</h1>
            <div id="register-name">
                <input onChange={()=>setRegistedName(event.target.value)} placeholder="Enter user name" id="register-password-input" type="text" />
            </div>
            <div id="register-password">
                <input onChange={()=>setRegistedPassword(event.target.value)} placeholder="Enter password" id="register-password-input" type="text" />
            </div>
            <div id="register-button">
                <button id="register-button-submit">Submit</button>
            </div>
            <div id="register-to-sign-up">
                Already have an account? <Link to={"/userpage/Login"}>Sign in</Link>
            </div>
        </div>
    );
};
export default Register;