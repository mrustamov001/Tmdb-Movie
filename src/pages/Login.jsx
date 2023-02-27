import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='register__bg'>
      <div className="container pt-24 mx-auto flex align-middle text-center justify-center">
        <form className='rounded-lg py-6 mt-36 form__inner'>
          <h1 className='text__color text-8xl mb-6 font-bold '>Login</h1>
          <input className='form__control' type="email" name="email" id="eamil" placeholder='Your Email' />
          <input className='form__control' type="password" name="password" id="password" placeholder='Your Password' />
          <button className='form__btn mx-auto link__register text-3xl py-1 pb-2 font-bold rounded-md px-8 bg__color text-white'>Send</button>
          <div className="flex text-2xl text-white ml-10">
            <span>If there is a</span>
            <Link className='form__login text-sky-700 ml-2' to={'/register'}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login