import Image from "next/image";
import Trending from "./(home)/Trending";
import Tech from "./(home)/Tech";


export default function Home() {
  return (
    <main className="px-10">
      <Trending/>
      <hr className="border border-gray-300 my-4" />
      <div className="md:flex gap-4">
        <div className='basis-3/4 '>
          <Tech/>
        </div>
        <div className=" basis-1/4 hidden sm:block ">       
        </div>
      </div>
     
    </main>


  );
}
