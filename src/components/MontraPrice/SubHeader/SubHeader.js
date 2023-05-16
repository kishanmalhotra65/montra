import React from 'react'
import './SubHeader.css';
function SubHeader() {
    return (

        <div className="Header-section">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid" style={{ "marginLeft": "18rem" }}>

                    <div className='row'>
                        <div className='col-2'>
                            <div className="sub-header-button">
                                <button>Personal</button>
                                <button>Business</button>
                            </div>
                        </div>
                        <div className='col-9 sub-header-heading'>
                            <ul className="navbar-nav me-auto">
                                <li className="sub-header-nav-item">
                                    <a className="sub-nav-link px-3" href="/">Payment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="sub-nav-link px-3" href="/">Banking</a>
                                </li>
                                <li className="nav-item">
                                    <a className="sub-nav-link px-3" href="/">Lending</a>
                                </li>
                                <li className="nav-item">
                                    <a className="sub-nav-link px-3" href="/">Invoicing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="sub-nav-link px-3" href="/">Inventory Management</a>
                                </li>
                                <li className="nav-item">
                                    <a className="sub-nav-link px-3" href="/">Montra Store</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-1 sign-in'>
                            <button>Montra Sign in</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SubHeader