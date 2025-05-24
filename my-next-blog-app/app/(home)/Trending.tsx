import Link from 'next/link'
import React from 'react'
import ad from '../../public/assets/ad-1.jpg'
import Image from 'next/image'
type Props = {
  className? : string
}

const TrendingCard = ({className})=> {
  return (
    <Link href='/' className={`${className} sm:h-auto w-full h-80 block relative sm:mt-0 mt-7`}>
     <div className='h-full relative w-full '>
      <Image src={ad} alt='image'fill style={{objectFit: 'cover'}} />   
     </div>
  
     <div className='absolute bottom-0 p-3'>
        <h4 className='bg-accent-orange inline-block px-6 py-1 font-semibold'>
          Tech
        </h4>
        <p className='mt-2 text-wh-100'>Ai is eating for human Knowlege</p>
     </div>
     
    </Link>
  )
}

const Trending = (props: Props) => {
  return (
    <section className='py-4 '>
      <div className='flex gap-8 items-center mb-4'>
        <div className=' text-wh-50 px-7 py-2 font-bold bg-wh-900'>Trending</div>
        <p className='text-sm'>Nunc enim lobortis quam risus et feugiat nibh eu ornare. Molestie sit
          nulla dolor diam turpis.</p>
      </div>
      <div className='sm:grid grid-cols-4 grid-rows-2 h-[500px] gap-4'>
        <TrendingCard className=' col-span-2 row-span-2'/>
        <TrendingCard className=' col-span-2 row-span-1'></TrendingCard>
        <TrendingCard className=' col-span-1 row-span-1'></TrendingCard>
        <TrendingCard className=' col-span-1 row-span-1'></TrendingCard>

      </div>
    </section>
  )
}

export default Trending