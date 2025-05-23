import React from 'react'
import Link from 'next/link'
import SocialLink from './SocialLink'
type Props = {}

const NavBar = (props: Props) => {
  return (
    <header>
        <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
           <div className='hidden sm:block'>
            <SocialLink/>
            </div>
           <div className='flex gap-10'>
                <Link href='/'>Home</Link>
                <Link href='/'>Trending</Link>
                <Link href='/'>About</Link>
           </div>
           <div> Sign In</div>
        </nav>
        <div className='flex justify-between mx-10 mt-4'>
           <div className='basis-3/4'>
                <h1 className='text-5xl font-bold'>Blog of the future</h1>
                <p className='mt-4 text-sm'>Blog dedicated towards AI and generation and job automation</p>
           </div>
           <div className='basis-full text-wh-10 bg-black'>
            what
           </div>
        
        </div>
           <hr className="border mx-10 border-gray-300 my-4" />
        

    </header>
  )
}

export default NavBar