'use client'

import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";
import React, { useState } from "react";

const LoginFrom = () => {

    const [email, setEmail]= useState('')
    const [Password, setPassword]= useState('')


    const onEmailChange =(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{
        console.log('email', e.target.value)
        setEmail(e.target.value)
    }

     const onPasswordChange =(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{
        console.log('password', e.target.value)
        setPassword(e.target.value)
    }

     const onSubmit =(e: React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()

        console.log('form data', {
            email,
            Password
        })
    }



    return (
        <div className="w-full ">
            <form  onSubmit={onSubmit} className="flex flex-col gap-4 w-full">

                <Input 
                name="email" 
                onChange={onEmailChange}
                label={'Email'} 
                id="email" 
                placeholder="johndoe@gmail.com" 
                type="text" />


                <Input 
                onChange={onPasswordChange}
                name="password" 
                label="Password" 
                placeholder="********" 
                id="password" 
                type="password" />

                {/*button */}
                <Button
                label='Sign In'
                type='submit'
                />
            </form>
        </div>
    );
};

export default LoginFrom;