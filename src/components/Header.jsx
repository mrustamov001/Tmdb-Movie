import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return ( 
        <header className=''>
            <div className="container mx-auto">
                <div className="flex justify-between pt-8">
                    <h1 className='m-0 text-4xl font-semibold text-white'>Movie<span className='text-4xl font-semibold text__color'> Street</span></h1>
                    <nav className='block pb-4'>
                        <ul className='list-none flex gap-20 justify-center'>
                            <li className='text-white text-3xl nav__link font-bold'>
                                <NavLink className={({isActive}) => (isActive ? "text__color" : "text-red-50")} to={'/'}>Home</NavLink>
                            </li>
                            <li className='text-white text-3xl nav__link font-bold'>
                                <NavLink className={({isActive}) => (isActive ? "text__color" : "text-red-50")} to={'/about'}>About</NavLink>
                            </li>
                            <li className='text-white text-3xl nav__link font-bold'>
                                <NavLink className={({isActive}) => (isActive ? "text__color" : "text-red-50")} to={'/contact'}>Contact</NavLink>
                            </li>
                            <li className='text-white text-3xl nav__link font-bold'>
                                <NavLink className={({isActive}) => (isActive ? "text__color" : "text-red-50")} to={'/login'}>Login</NavLink>
                            </li>
                            <li className='text-white text-3xl nav__link font-bold'>
                                <NavLink className={({isActive}) => (isActive ? "text__color" : "text-red-50")} to={'/register'}>Register</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header