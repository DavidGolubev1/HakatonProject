import { Link } from "react-router-dom";
import "./../Style/login.css"

function Login(){
    return(
        <div id="login-page">
            <h1>Login</h1>
            <div id="login-name"> 
                <input placeholder="Enter user name" id="login-password-input" type="text" />
            </div>
            <div id="login-password">
                <input placeholder="Enter password" id="login-password-input" type="text" />
            </div>
            <div id="login-button">
                <button id="login-button-submit">Submit</button>
            </div>
            <div id="login-to-sign-up">
                Dont have an account? <Link to={"/userpage/register"}>Sign up</Link>
            </div>
        </div>
    );
};
export default Login;