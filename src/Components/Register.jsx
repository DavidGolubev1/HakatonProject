import { Link , useNavigate } from "react-router-dom";
import "./../Style/Register.css"
import { useState } from "react";

function Register() {
    const [registedName, setRegistedName] = useState("")
    const [registedPassword, setRegistedPassword] = useState("")
    const navigate=useNavigate()

    function checkAndSign() {
        let getArrayFromLS = localStorage.getItem("users")
        let localUsers=JSON.parse(getArrayFromLS)
        console.log(localUsers);
        const newUser = {
            userName: registedName,
            password: registedPassword,
            Email:"",
            phone:"",
        }
        if ((localUsers.filter(item=>item.userName===registedName).length===0)) {
            if (registedName.length > 3) {
                if (registedPassword.length > 4) {
                    localUsers.push(newUser)
                    localStorage.setItem("users", JSON.stringify(localUsers))
                    alert("Signed up successefully")
                    navigate("/Login")
                } else {
                    alert("Password is too short, make it atleast 5 chars")
                }
            } else {
                alert("User name is too short, make it atleast 4 chars")
            }
        } else {
            alert("User name already taken")
        }
    }

    return (
        <div id="register-page">
            <h1>Sign up</h1>
            <div id="register-name">
                <input onChange={(event) => setRegistedName(event.target.value)} placeholder="Enter user name" id="register-password-input" type="text" />
            </div>
            <div id="register-password">
                <input onChange={(event) => setRegistedPassword(event.target.value)} placeholder="Enter password" id="register-password-input" type="password" />
            </div>
            <div id="register-button">
                <button onClick={()=>checkAndSign()} id="register-button-submit">Submit</button>
            </div>
            <div id="register-to-sign-up">
                Already have an account? <Link to={"/userpage/Login"}>Sign in</Link>
            </div>
        </div>
    );
};
export default Register;