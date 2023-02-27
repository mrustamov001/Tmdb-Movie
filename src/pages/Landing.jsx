import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing'>
      <div className="container mx-auto pt-56">
        <div className="flex align-middle justify-center pt-36 my-auto">
          <div className='text-center mx-auto'>
            <h2 className="landing__title text-9xl text-white text-center font-bold tracking-widest">
              Web
              <span className='text__color'> Street</span>
              <br />
              <span className='text__color'>Movies</span>
            </h2>
            <div className="mt-8 mx-auto">
              <Link className='link__login text-4xl py-1 pb-2 font-bold rounded-md ml-8 px-8 bg-white text__color mr-6' to={'/login'} >Login</Link>
              <Link className='link__register text-4xl py-1 pb-2 font-bold rounded-md px-8 bg__color text-white mr-6' to={'/register'} >Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing