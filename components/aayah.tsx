"use client"

import React from 'react'

interface Props {
    data: any
}

const Aayat = ({ data }: Props) => {
    console.log(data)
    return (
        <div className='flex'>
            <p className='font-uthmanic w-max text-2xl text-center break-all hyphens-auto'>{data.arabic_text}</p>
            <p className='text-sm text-gray-400'>{data.aya}</p>
        </div>
    )
}

export default Aayat
