"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { LuAsterisk } from "react-icons/lu";

interface IProps {
  multiple?: boolean;
  required?: boolean;
  label: string;
  id: string;
}

const ImageInput = ({
  multiple = false,
  label,
  required = false,
  id,
}: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);  //usememo() 

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);

    console.log(file);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex">
        <label htmlFor={id} className="text-[14px] font-semibold">
          {label}
        </label>

        {required && <LuAsterisk className="text-indigo-700" />}
      </div>

      <div
        onClick={() => inputRef.current?.click()}
        className="border border-dashed border-indigo-200 h-35 rounded-md py-3 px-2 cursor-pointer flex flex-col justify-center items-center"
      >
        <p className="text-[10px]">Click to upload image</p>
        <small>
          {multiple ? "Multiple files allowed" : "Only single file allowed"}
        </small>
      </div>

      <input
        ref={inputRef}
        id={id}
        type="file"
        accept="image/*"
        multiple={multiple}
        onChange={onChange}
        className="hidden"
      />

      {preview && (
        <div className="h-25 w-25">
          <Image
            src={preview}
            alt="Preview"
            width={100}
            height={100}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ImageInput;