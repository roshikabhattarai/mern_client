import React from 'react'
import { LuAsterisk } from "react-icons/lu";


interface IProps {
    label: string;
    id: string;
    type: 'text' | 'email' | 'password' | 'number';
    placeholder: string,
    name: string,
    onChange:(e:React.ChangeEvent<HTMLInputElement,HTMLInputElement>) => void
}


const Input = ({ id, label, placeholder, type, name, onChange }: IProps) => {
    return (
        <div className="w-full flex flex-col gap-1">
            <div className={'flex'}>
                <label htmlFor={id} className="text-[14px] font-semibold ">
                    {label}
                </label>
                <LuAsterisk className='text-indigo-700' />
            </div>
            <input
            onChange={onChange}
                id={id}
                className="w-full border-[1.5px] border-indigo-300 px-2 py-2.5 rounded-sm focus:outline-indigo-700"
                type={type}
                placeholder={placeholder}
                name={name}
            />
        </div>
    )
}

export default Input