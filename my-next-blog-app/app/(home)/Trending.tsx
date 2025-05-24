import React from 'react'

type Props = {}

const Trending = (props: Props) => {
  return (
    <section className='py-4'>
      <div className='flex gap-8 items-center mb-4'>
        <div className='bg-wh-900 text-wh-50 px-7 py-2 font-bold'>Trending</div>
        <p className='text-sm'>Nunc enim lobortis quam risus et feugiat nibh eu ornare. Molestie sit
          nulla dolor diam turpis.</p>
      </div>
      <div className='sm:grid grid-cols-4 grid-rows-2 gap-4 sm:h-[400px] '>
        <div className='bg-slate-500 col-span-2 row-span-2'></div>
        <div className='bg-slate-600 col-span-2 row-span-1'></div>
        <div className='bg-slate-950 col-span-1 row-span-1'></div>
        <div className='bg-slate-950 col-span-1 row-span-1'></div>

      </div>
    </section>
  )
}

export default Trending