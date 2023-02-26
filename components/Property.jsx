import Link from "next/link";
import Image from "next/image";
import defaultImage from "../assets/Images/house.jpg";
import Verified from "../assets/icons/verified";
import millify from "millify";

export default function Property({ property }) {
  const {
    coverPhoto,
    price,
    state,
    title,
    rentFrequency,
    rooms,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  } = property;
  return (
    
      <article className="border-2 card">
      <div className="imgCont">
      <Image src={coverPhoto? coverPhoto.url : defaultImage} alt={title} width={320 }height={200}/>
      </div>
    

        <div className="p-2  text-center">
        <h3 className="text-lg font-bold my-2 text-primary">         {title.length > 30 ? title.substring(0, 25) + '...' : title} </h3>
        <div className="flex flex-row justify-center gap-10">
        <p><span className="font-semibold">price:</span> AED {millify(price)} {rentFrequency && `/${rentFrequency}`}</p>
        <p>{isVerified &&<Verified/>}</p>
        </div>

  
        <p className="my-4"><span className="font-semibold">rooms:</span> {rooms} 
         |
         <span className="font-semibold"> baths:</span> {baths} | 
         <span className="font-semibold">  area: </span>
           {millify(area)} sqft</p>
       
  
           <Link href={`/property/${externalID}`} passHref>
<button className="btn"> view</button>
</Link>

        

        </div>
        
        
      
      </article>
     


  );
}
