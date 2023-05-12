import React from 'react'
import "./Header.css";
import logo from "../../assets/logo.png"
function Header() {
    return (
        <div className='Header'>

            <div className='logo'>
                <img className="logo__spacing" src={logo} alt='montra-logo' />
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{
                "backgroundColor": "#FFFFFF"
            }}>

                <div className="container-fluid" style={{ "marginLeft": "18rem" }}>

                    <div className=' row w-100'>
                        <div className='col-4'>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-5">
                                <li className="nav-item">
                                    <a className="nav-link active px-4" href="#!">Montra App</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-4" href="#!">Platforms</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-4" href="#!">Solutions</a>
                                </li>
                            </ul>

                        </div>
                        <div className='col-4'></div>
                        <div className='col-4'>

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Nigeria
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link  px-4" href="#!">Company </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-4" href="#!">Resources</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-4" href="#!">Help</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header