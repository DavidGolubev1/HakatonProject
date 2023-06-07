import { Outlet } from 'react-router-dom'
import './../Style/layout.css'
function Layout()
{
    return(
        <div>
            <div className="navbar-container">
                navbar
            </div>
            <Outlet />
            <div className="footer">
                footer
            </div>


        </div>
    )
}
export default Layout