import PageTitle from '@/components/admin/page-title'
import React from 'react'

const Productpage = () => {
    return (
        <main className='h-full'>
            <PageTitle
                title='All Products'
                linkText='Add New'
                link='/admin/categories/create'

            />
        </main>
    )
}

export default Productpage