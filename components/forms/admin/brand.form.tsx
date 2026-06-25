'use client'
import AdminListCard from "@/components/admin/lists-card"
import Button from "@/components/common/ui/button"
import ImageInput from "@/components/common/ui/image-input"
import Input from "@/components/common/ui/input"
import { register } from "module"
import { useForm } from "react-hook-form"


export const BrandForm= ()=>{
    const { register}= useForm({
        defaultValues:{
            name:'',
            description:'',
            logo:''
        }
    })
    return(
        <AdminListCard>
            <div>
                <h4 className='text-[18px] font-semibold text-black/80 my-4'> Brand Form</h4>

                <form className='max-w-120 mx-auto flex gap-4 flex-col border-amber-100 px-3.5 py-3 rounded-md'>
                    <Input
                    label='Name'
                    name={'name'}
                    id={'name'}
                    type='text'
                    placeholder='Caliber'
                    register={register}
                    required
                    />

                    <Input
                    label='Description'
                    name={'description'}
                    id={'description'}
                    type='text'
                    placeholder='Describe your brand [at least 25 character'
                    multiline={true}
                    register={register}
                    />
                    <div>
                         <ImageInput/>  
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

// box ma click garda hunu paryo particular text ma haina voli garni