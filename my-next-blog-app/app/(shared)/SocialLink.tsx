import React from 'react'
import Image from 'next/image'
import Twitter from '../../public/assets/social_twitter.png'
import Facebook from '../../public/assets/social_facebook.png'
import Instagram from '../../public/assets/social_instagram.png'
import Discord from '../../public/assets/social_discord.png'
import Pinterest from '../../public/assets/social_pinterest.png'


type Props = {}


const SocialLink = (props: Props) => {
  return (
    <div className='flex gap-6'>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
         <Image  src={Twitter} alt='twitter' className='hover:opacity-30'/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
         <Image  src={Facebook} alt='twitter' className='hover:opacity-30'/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
         <Image  src={Instagram} alt='twitter' className='hover:opacity-30'/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
         <Image  src={Pinterest} alt='twitter' className='hover:opacity-30'/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
         <Image  src={Discord} alt='twitter' className='hover:opacity-30'/>
        </a>
    </div>
  )
}

export default SocialLink