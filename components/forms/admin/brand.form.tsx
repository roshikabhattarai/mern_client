'use client'

import AdminListCard from '@/components/admin/lists-card'
import Button from '@/components/common/ui/button'
import ImageInput from '@/components/common/ui/image-input'
import Input from '@/components/common/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import { TBrandInput } from '@/schema/brand.schema'

const BrandForm = () => {
    const { register } = useForm({
        defaultValues: {
            name: '',
            description: '',
            logo: undefined
        },
        resolver:yupResolver(brandSchema)
    })
    const onSubmit= (data: TBrandInput)=>{
        console.log(data)
    }

    return (
        <AdminListCard>
            <div>
                <h4 className='text-[18px] font-semibold text-black/80 my-4'>Brand Form</h4>
                <form className=' max-w-120 mx-auto flex gap-4 flex-col border border-gray-200 px-4 py-8 rounded-md '>
                    <Input
                        label='Name'
                        name={'name'}
                        id={'name'}
                        type='text'
                        placeholder='Caliber'
                        register={register}
                        required
                    />



                    {/* image input */}
                    <ImageInput
                        label='Logo'
                        id='brand_logo'
                        required
                    />
                    <Input
                        label='Description'
                        name={'description'}
                        id={'description'}
                        multiline={true}
                        type='text'
                        placeholder='Describe your brand [at least 25 characters]'
                        register={register}
                    />

                    <div>
                        <Button
                            label='Submit'
                            type='submit'
                        />
                    </div>

                </form>
            </div>
        </AdminListCard>
    )
}

export default BrandForm
// validation,errorhalding change vayo vanni hook form ko , use form ko useform 