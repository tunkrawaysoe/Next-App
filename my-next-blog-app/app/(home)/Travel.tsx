import React from 'react'
import Card from '../(shared)/Card'

type Props = {}

const Travel = (props: Props) => {
  return (
    <section>
    <div className="flex items-center gap-3 mt-2 mb-6">
        <h4 className="bg-green-400 py-2 px-5 text-wh-900 text-sm font-bold">
          HOT
        </h4>
        <p className="font-bold text-2xl">Latest News in Technology</p>
    </div>
    <div className='sm:grid grid-rows-2 grid-cols-3 gap-4'>
        <Card className='col-span-1 row-span-1 h-[300px] bg-accent-orange' imageHeight="h-48"/>
        <Card className='col-span-1 row-span-1 h-[300px] bg-blue-600' imageHeight="h-48"/>
        <Card className='col-span-1 row-span-1 h-[300px] bg-wh-100' imageHeight="h-48"/>
        <Card className='flex gap-3 col-span-3 row-span-1 h-[300px] bg-slate-600' imageHeight="h-96"/>
    </div>
    
      
    </section>
  )
}

export default Travel