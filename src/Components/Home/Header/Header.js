import React from 'react'
import { FaUserAlt, FaBriefcase, FaSearch } from "react-icons/fa";
import "../../styles/header.css"
import Logo from './Logo';
import Nav from './Nav';
import Background from './Background';

const Header = () => {
    return (
        <>
            <div className='header'>

                <div className='header_1'>
                    <select className='header_1_lang'><option>EN</option> </select>
                    <select className='header_1_currency'><option>$</option> </select>
                </div>

                <div className='header_2'>
                    <div className='header_2_profile'> <FaUserAlt /><p>My profile</p></div>
                    <div className='header_2_cart'> <FaBriefcase /><p>2 items</p></div>
                    <div className='header_2_search'><FaSearch /></div>
                </div>

            </div>
            <Logo />
            <Nav />
            <Background />
        </>
    )
}

export default Header




