"use client"

import React from 'react'
import { Github, Heart, Menu } from "lucide-react";
import Link from 'next/link'
import { ModeToggle } from './ModeToggle';

const Nav = () => {
  return (
    <div className='sticky top-0 backdrop-blur-lg w-full justify-center'>
      <div className='flex justify-between border-b flex-row mx-4 md:mx-7 lg:mx-10 py-3'>
        {/* Menu and Logo */}
        <div className='flex gap-2 items-center'>
          <Menu className='w-9 h-9 p-1 hover:bg-slate-800/20 dark:hover:bg-slate-300/10 rounded-xl' />
          <Link href={'/'} className='text-2xl font-semibold'>Al Quran</Link>
        </div>

        {/* Icons End */}
        <div className='flex items-center gap-1'>
          <Link href=""><Github className='w-8 h-8 p-1.5 hover:bg-slate-800/20 dark:hover:bg-slate-300/10 rounded-xl'/></Link>
          <Link href=""><Heart className='w-8 h-8 p-1.5 hover:bg-slate-800/20 dark:hover:bg-slate-300/10 rounded-xl' /></Link>
          <Link href=""></Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Nav
