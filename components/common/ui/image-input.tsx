import React from 'react'

interface IProps(
multiple?: boolean,
required?: boolean,
label:string,
id:string
)

const ImageInput = () => {
  return (
    <div className='border border-dashed border-amber-500 h-40 rounded-md px-3 px-2 '>
      <input
      type='file'
     className='cursor-pointer'
     multiple={multiple}
      />
    </div>
  )
}

export default ImageInput

