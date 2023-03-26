import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

import { NavLink } from 'react-router-dom'

import './NavbarStyles.css'

function Navbar() {
    const [nav] = useState(false)
    // const handleNav = () => setNav(!nav)

    return (
            <nav className={nav ? 'navbar navbar-bg' : 'navbar'}>
                <div className={nav ? 'logo dark' : 'logo'}>
                    <h2>SECOND CHANCE.</h2>
                </div>

                <ul className="nav-menu">
                    <NavLink activeClassName='active' to='/home' >Home</NavLink>
                    <NavLink activeClassName='active' to='/catalog' >Catalog</NavLink>
                    <NavLink activeClassName='active' to='/brands' >Brands</NavLink>
                    <BiSearch className='icon' />
                </ul>
            </nav>
    )
}

export default Navbar
