import React from 'react'
import Tophead from '../components/tophead'
import Button from '../components/button'
const Login = () => {
  return (
    <div>
        <Tophead page='My Account' route='My Account'/>
        <div className='place-items-center'>
        <div className='bg-white shadow-md shadow-gray-200 h-[24rem] w-[25rem] place-items-center flex flex-col rounded-[4px] mb-10 justify-center space-y-7 p-5 mt-10'>
            <h1 className='font-bold text-2xl'>Login</h1>
            <p className='text-gray-400 text-[12px]'>Please Login using account detail below.</p>
            <input type="email" name="" id="" placeholder='Email Address' className='outline-none px-2 border-[1px]  text-sm w-full border-gray-400 text-gray-600 p-2'/>
            <input type="password" name="" id="" placeholder="Password" className='outline-none border-[1px] text-sm w-full  border-gray-400 text-gray-600 p-2 px-2'/>
            <p className='text-[12px] text-gray-500'>Forgot your password?</p>
            
            <div className='w-full bg-pink-600 place-items-center'>
            <Button btn='Sign In'/>
            </div>
            <p className='text-[12px] text-gray-500 font-semibold'>Don&apos;t have Account? Create account</p>
        </div>
        </div>
    </div>
  )
}

export default Login