import React from 'react'
// import { type } from './../../../.next/dev/types/routes.d';

interface IProps{
    label: string,
    type?: 'reset' | 'submit' | 'button'
}

const Button = ({label ='Button', type= 'button'}: IProps) => {
  return (
    <div className='w-full'>
        <button 
        // onClick={()=>{

        // }}
        type={type}
        className="w-full bg-linear-to-r from-indigo-400 to-indigo-600 py-2.5 rounded-sm cursor-pointer text-white font-bold mt-3 ">
                    Sign Up
                    {label}
                </button>
      
    </div>
  )
}

export default Button;
 
 
 