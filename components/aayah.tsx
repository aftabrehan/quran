"use client"

import React from 'react'

interface Props {
    data: any
}

const Aayat = ({ data }: Props) => {
    console.log(data)
    return (
        <div>
            <p className='font-uthmanic text-2xl text-center'>{data.arabic_text}</p>
        </div>
    )
}

export default Aayat
