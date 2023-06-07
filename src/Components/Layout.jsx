import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import './../Style/layout.css'
function Layout() {
    const [burgerBool, setBurgerBool] = useState(false)

    return (
        <div className='layout-container'>
            <div className="nav-include-all">
                <div className="navbar">
                    <div className="links-bar">
                        <Link to={`/`} className="logo-background"><img id="logo" src="" alt="" /></Link>
                        <Link className='nav-links' to={'Voulnteerings'}><div>Serve Finder</div> </Link>
                        <Link className='nav-links' to={'Login'}>Log In </Link>
                        <Link className='nav-links' to={'AddVolunteering'}>Add + </Link>
                        <Link className='nav-links' to={'Login'}> </Link>
                        
                        <label className="burger" htmlFor="burger">
                            <input type="checkbox" id="burger" onChange={() => setBurgerBool(!burgerBool)} />
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
                {burgerBool && <div className='oper-bar-box'>
                    <div className="open-bar">

                    </div>
                </div>}
            </div>
            <Outlet />
            <div className="footer">
                footer
            </div>


        </div>
    )
}
export default Layout