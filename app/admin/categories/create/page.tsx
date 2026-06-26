import PageTitle from '@/components/admin/page-title'
import  BrandForm from '@/components/forms/admin/categories.form'
import React from 'react'

const CreateBrandPage = () => {
    return (
        <main className='h-full'>
            <PageTitle

                title='Add new brand'
                linkText='Go Back'
                link='/admin/category'

            
            />
            <BrandForm/>
        </main>
    )
}

export default CreateBrandPage