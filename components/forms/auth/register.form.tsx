'use client'

import Button from '@/components/common/ui/button'
import Input from '@/components/common/ui/input'
import { registerSchema } from '@/schema/auth.schema'
import { TRegisterInput } from '@/types/auth.types'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


// interface IRegisterInput {
//     full_name: string;
//     email: string,
//     password: string;
//     c_password: string,
//     phone?: string
// }

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            full_name: '',
            email: '',
            password: '',
            phone: '',
            c_password: ''
        },
        resolver: yupResolver(registerSchema)

    })



    const onSubmit = (data: TRegisterInput) => {
        console.log('form data', data)
    }

    console.log(errors)
    return (
        <div className="w-full ">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                <Input
                    register={register}
                    name='full_name'
                    id='full_name'
                    type='text'
                    placeholder='John Doe'
                    required
                    label='Full Name'
                    error={errors?.full_name?.message}
                />

                <Input
                    register={register}
                    name="email"
                    label={'Email'}
                    id="email"
                    placeholder="johndoe@gmail.com"
                    required
                    type="text"
                    error={errors?.email?.message}

                />

                <Input
                    register={register}
                    name="password"
                    label="Password"
                    placeholder="********"
                    id="password"
                    required
                    type="password"
                    error={errors?.password?.message}

                />

                <Input
                    register={register}
                    name="c_password"
                    label="Retype Password"
                    placeholder="********"
                    id="c_password"
                    required
                    type="password"
                    error={errors?.c_password?.message}

                />

                <Input
                    register={register}
                    label='Phone Number'
                    id='phone'
                    name='phone'
                    type='text'
                    placeholder='98653****0'
                        error={errors?.phone?.message}

                />


                {/*button */}
                <Button
                    label='Sign Up'
                    type='submit'
                />
            </form>
        </div>
    )
}

export default RegisterForm