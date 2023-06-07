import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from './../assets/Logo.png'
import './../Style/layout.css'
function Layout() {
    const [burgerBool, setBurgerBool] = useState(false)

    return (
        <div className='layout-container'>
            <div className="nav-include-all">
                <div className="navbar">
                    <div className="links-bar">
                        <Link to={`/`} className="logo-background"><img id="logo" src={Logo} alt="" /></Link>
                        <Link className='nav-links' to={'/'}><div>Home page</div> </Link>
                        <Link className='nav-links' to={'About'}>About us </Link>
                        <Link className='nav-links' to={'Contact'}>Contact us</Link>
                        <Link className='nav-links' to={'userpage/Login'}>Log In </Link>
                    
                        <div id='layout-profile-signed'>
                            <div>
                                <img id='profile-signed-avatar' src="" alt="" />
                            </div>
                            <div id='profile-signed-drop-down'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                        </div>

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
                <div className="website-name-footer">
                    Help Hub
                </div>
                <div className="social-links">
                    <a href="https://www.facebook.com/amitcapi" target="_blank" rel="noopener noreferrer" >
                        <img width="30" height="30" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
                    </a>
                    <a href="https://github.com/amitbarha" target="_blank" rel="noopener noreferrer" >
                        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github" />
                    </a>
                    <a href="https://www.google.com/maps/place/%D7%94%D7%97%D7%99%D7%9C%D7%96%D7%95%D7%9F+3,+%D7%A8%D7%9E%D7%AA+%D7%92%D7%9F%E2%80%AD/@32.0872801,34.8040903,17z/data=!3m1!4b1!4m6!3m5!1s0x151d4bc6f14be6b9:0xccb089b29dfbffe2!8m2!3d32.0872801!4d34.8040903!16s%2Fg%2F11fx117dcw" target="_blank" rel="noopener noreferrer" >
                        <img width="30" height="30" src="https://img.icons8.com/color/48/google-maps-new.png" alt="google-maps-new" />
                    </a>
                    <a href="https://www.linkedin.com/in/amit-barhanin-588852262/" target="_blank" rel="noopener noreferrer" >
                        <img width="30" height="30" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
                    </a>
                </div>
                <div className="made-by">
                    made by The best team
                </div>
            </div>


        </div>
    )
}
export default Layout