import React from 'react'
import Card from '../(shared)/Card'


type Props = {}

const Tech = (props: Props) => {
  return (
    <section className='py-4'>
      <div className="sm:grid grid-cols-2 grid-rows-3  gap-4">
              {/* LARGE CARD */}
            <Card
              className="col-span-1 row-span-3"
              imageHeight="h-96"
              isLongForm
            />
            {/* SMALL CARDS */}
            <Card
              className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
              imageHeight="h-48"
              
              isSmallCard
            />
            <Card
              className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
              imageHeight="h-48"
            
              isSmallCard
            />
            <Card
              className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
              imageHeight="h-48"
              isSmallCard
            />
          </div>
    </section>
  )
}

export default Tech