import Image from "next/image";
import Trending from "./(home)/Trending";
import Tech from "./(home)/Tech";

export default function Home() {
  return (
    <main className="px-10">
      <Trending/>
      <div className="md:flex gap-4">
        <div className='basis-3/4 '>
        <div className="grid grid-cols-2 grid-rows-3 h-[400px] bg-black gap-4">
            <div className="col-span-1 row-span-3 bg-slate-500"></div>
             <div className="col-span-1 row-span-1 bg-accent-orange"></div>
              <div className="col-span-1 row-span-1 bg-blue-500"></div>
            <div className="col-span-1 row-span-1 bg-wh-50"></div>
           
           
          </div>

        </div>
        <div className=" basis-1/4 hidden sm:block bg-slate-600">
          

        </div>
      </div>
    </main>
    
  );
}
