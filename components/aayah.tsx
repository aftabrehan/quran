"use client"

import React from 'react'

interface Props {
    data: any
}

const Aayat = ({ data }: Props) => {
    console.log(data)
    return (
        <p className='font-uthmanic w-max text-2xl text-center'>{data.arabic_text}</p>
    )
}

export default Aayat
