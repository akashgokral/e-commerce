import React from 'react'
import "../../styles/nav.css"
import logo from "../../../Images/Web/iSHOP Logo.svg"


const Nav = () => {
    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-light  sticky-top bg-light">

                <div className="container d-flex flex-lg-column justify-content-between align-items-center">
                    <div className='logo'><img src={logo}></img></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#">STORE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">IPHONE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">IPAD</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MACBOOK</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ACCESSORIES</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default Nav