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
    <div className='sm:flex gap-6'>
      <Card className='basis-1/3 sm:mt-2 mt-5' imageHeight='h-80'/>
      <Card className='basis-1/3 sm:mt-2 mt-5 ' imageHeight='h-80'/>
      <Card className='basis-1/3 sm:mt-2 mt-5' imageHeight='h-80'/>
    </div>
 
      <Card  className='sm:flex mt-5 items-center justify-between gap-6' imageHeight='h-80'/>
    
    
    
      
    </section>
  )
}

export default Travel