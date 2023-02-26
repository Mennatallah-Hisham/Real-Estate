import { useState } from "react";
import  {useRouter} from 'next/router';
import Filter from "../assets/icons/filter";
import SearchFilter from "../components/SearchFilter";
import Property from "../components/Property";
import { fetchApi } from "../utils/fetchApi";
import { baseUrl } from "../utils/fetchApi";

export default function Search({properties}){
   
    const [searchFilter,setSearchFilter]=useState(false);
    const router = useRouter();
return(
    <>
   
        <div >
        <button  className="my-10 flex gap-2 bg-primary text-white capitalize
         px-6 py-2 mx-auto"
        
        onClick={()=>setSearchFilter((prev)=>!prev)}>
          
            search by filters <Filter/>
           
            </button> 
        </div>
   

            {searchFilter && <SearchFilter/>}
            {
                router.query.purpose &&
 <h2>
 {router.query.purpose}
</h2>
            }
           

            <section className="flex-cont">
                {properties.map((property)=><Property property={property} key={property.id}/>)}

                {properties.length===0 && (<p> no results found</p>)}
            </section>
    </>
)

}



// export async function getServerSideProps ({ query }){
//     const purpose = query.purpose || 'for-rent';
//     const rentFrequency = query.rentFrequency || 'yearly';
//     const minPrice =query.minPrice || '0';
//     const maxPrice =query.maxPrice || '10000000';
//     const roomMin =query.roomMin || '0';
//     const bathsMin=query.bathsMin || '0';
//     const sort =query.sort || 'price-desc';
//     const areaMax = query.areaMax || '35000';
//     const areaMin = query.areaMin || '10';
//     const locationExternalIDs = query.locationExternalIDs || '5002';
//     const categoryExternalID = query.categoryExternalID || '4';


//     let response = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&sort=${sort}&rentFrequency=${rentFrequency}&categoryExternalID=${categoryExternalID}&priceMin=${minPrice}&priceMax=${maxPrice}&areaMin=${areaMin}&areaMax=${areaMax}&roomsMin=${roomMin}&bathsMin=${bathsMin}`);

// // response =JSON.parse(JSON.stringify(response));

   

// return {
//     props: {
//       properties: response?.hits,
//     },
//   };
// }


export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  
    return {
      props: {
        properties: data?.hits,
      },
    };
  }