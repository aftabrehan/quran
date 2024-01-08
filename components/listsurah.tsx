"use client"

import React from 'react'
import Link from 'next/link'

interface Props {
    data: any
}

const ListSurah = ({ data }: Props) => {
    console.log(data)
    return (
        <Link href={''} className='border p-4 hover:border-[#22A5AD] flex justify-between items-center rounded-md'>
            <div className='flex gap-2 items-center justify-center'>
                <span className='flex mr-2 -z-10 bg-gray-300 dark:bg-gray-800/30 w-12 h-12 rounded-lg text-center items-center justify-center rotate-45'><p className='-rotate-45 text-black dark:text-white'>{data.number}</p></span>
                <div className='flex flex-col'>
                    <p className='font-semibold text-lg'>{data.englishName}</p>
                    <p className='text-sm text-gray-400'>{data.englishNameTranslation}</p>
                </div>
            </div>
            <div className='flex flex-col text-end'>
                <p className='font-uthmanic'>{data.name}</p>
                <p className='text-sm text-gray-400'>{data.numberOfAyahs} Aayahs</p>
            </div>
        </Link>
    )
}

export default ListSurah
