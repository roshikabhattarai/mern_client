'use client'

import Button from '@/components/common/ui/button'
import Input from '@/components/common/ui/input'
import React, { useState } from 'react'

const RegisterForm = () => {

    const [full_name, setFull_Name]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [RetypePassword, setRetypePassword]= useState('')
    const [phone, setPhone]= useState('')

    const onFull_NameChange= (e: React.ChangeEvent<HTMLInputElement, HTMLElement>)=>{
        console.log('Full_Name', e.target.value)
        setEmail(e.target.value)
    }

    const onEmailChange= (e: React.ChangeEvent<HTMLInputElement, HTMLElement>)=>{
        console.log('email', e.target.value)
        setEmail(e.target.value)
    }

    const onPasswordChange= (e: React.ChangeEvent<HTMLInputElement, HTMLElement>)=>{
        console.log('Password', e.target.value)
        setEmail(e.target.value)
    }

    const onRetypePasswordChange= (e: React.ChangeEvent<HTMLInputElement, HTMLElement>)=>{
        console.log('RetypePassword', e.target.value)
        setEmail(e.target.value)
    }

    const onPhoneChange= (e: React.ChangeEvent<HTMLInputElement, HTMLElement>)=>{
        console.log('Phone', e.target.value)
        setEmail(e.target.value)
    }

    const onSubmit =(e: React.SubmitEvent<HTMLFormElement>)=>{
            e.preventDefault()
    
            console.log('form data', {
                full_name,
                email,
                password,
                RetypePassword,
                phone
            })
        }

    return (
        <div className="w-full ">
            <form className="flex flex-col gap-4 w-full">
                <Input
                    name='full_name'
                    onChange={onFull_NameChange}
                    id='full_name'
                    type='text'
                    placeholder='John Doe'
                    label='Full Name'
                />

                <Input
                    name="email"
                    onChange={onEmailChange}
                    label={'Email'}
                    id="email"
                    placeholder="johndoe@gmail.com"
                    type="text"
                />

                <Input
                onChange={onPasswordChange}
                    name="password"
                    label="Password"
                    placeholder="********"
                    id="password"
                    type="password"
                />

                <Input
                onChange={onRetypePasswordChange}
                    name="c_password"
                    label="Retype Password"
                    placeholder="********"
                    id="c_password"
                    type="password"
                />

                <Input
                onChange={onPhoneChange}
                    label='Phone Number'
                    id='phone'
                    name='phone'
                    type='text'
                    placeholder='98653****0'
                />


                {/*button */}
               <Button
               type='submit'
               label='Sign Up'
               />
            </form>
        </div>
    )
}


export default RegisterForm