import Link from 'next/link';
import React from 'react'
import ai4 from '../../public/assets/ai-4.jpg'
import Image from 'next/image';

type Props = {
  className? : string ;
  isLongForm? : boolean;
  isSmallCard? : boolean;
  imageHeight? :string;
}

const Card = ({className,isLongForm,isSmallCard,imageHeight}: Props) => {
  return (
    <div className={className}>
      <Link
        className="basis-full hover:opacity-70"
        href={`/`}
      >
        <div className={`relative mb-3 ${imageHeight}`}>
          <Image
            fill
            alt="tech"
            placeholder="blur"
            src={ai4}
            style={{ objectFit: "cover" }}  
          />
        </div>
      </Link>
      <div className="basis-full ">
        <Link href={`/`}>
          <h4
            className={`font-bold hover:text-accent-green
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
          `}
          >
            eoifnudfnudufnun
          
          </h4>
        </Link>

        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">fgnoinonpifoigofi</h5>
          <h6 className="text-wh-300 text-xs">what the fuck are </h6>
        </div>
        <p
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          yoidnvundufiu
        
        </p>
      </div>
    </div>
  );

  
}

export default Card