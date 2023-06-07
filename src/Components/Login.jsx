import { Link, json , useNavigate } from "react-router-dom";
import "./../Style/login.css"
import { useState  } from "react";

function Login(){
    const [enteredName , setEnteredName]=useState("")
    const [enteredPassword , setEnteredPassword]=useState("")
    const navigate=useNavigate()

    function checkAndLog (){
        let arrayFromLS=JSON.parse(localStorage.getItem("users"));
        if(arrayFromLS.filter(item=>item.userName===enteredName).length!=0){
            let specificAccount=(arrayFromLS.find(item=>item.userName===enteredName))
            if(specificAccount.password===enteredPassword){
                console.log(arrayFromLS.find(item=>item.userName===enteredName));
                alert("Logged in successefully")
                navigate("/")
                localStorage.setItem("logged-user" , enteredName)
            }else {
                alert("Username or password is wrong")
            }
        }else{
            alert("Username or password is wrong")
        }
    } 

    return(
        <div id="login-page">
            <h1>Login</h1>
            <div id="login-name"> 
                <input onChange={(event)=>setEnteredName(event.target.value)} placeholder="Enter user name" id="login-password-input" type="text" />
            </div>
            <div id="login-password">
                <input onChange={(event)=>setEnteredPassword(event.target.value)} placeholder="Enter password" id="login-password-input" type="password" />
            </div>
            <div id="login-button">
                <button onClick={()=>checkAndLog()} id="login-button-submit">Submit</button>
            </div>
            <div id="login-to-sign-up">
                Dont have an account? <Link to={"/userpage/register"}>Sign up</Link>
            </div>
        </div>
    );
};
export default Login;