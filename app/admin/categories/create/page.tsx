import React from 'react'
import PageTitle from '@/components/admin/page-title'
import CategoryForm from '@/components/forms/admin/categories.form'

const CreateCategoryPage = () => {
    return (
        <main>
            <PageTitle
                title="Add New Category"
                linkText="Go Back"
                link="/admin/category"
            />

            <CategoryForm />
        </main>
    )
}
export default CreateCategoryPage