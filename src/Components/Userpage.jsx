import { Outlet } from "react-router-dom";
import "./../Style/Userpage.css"

function Userpage() {
    return (
        <div id="user-page"> 
            <div id="user-page-outlet">
                <Outlet />
            </div>
        </div>
    )
}
export default Userpage;