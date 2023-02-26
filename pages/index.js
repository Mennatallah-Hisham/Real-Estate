



import { baseUrl , fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

import Hero from '../components/Hero';
export default function Home({propertiesForSale,propertiesForRent}) {

  return (
  <>
  
  <Hero></Hero>

   

      <section>
        


      
        <h2>for rent</h2>
<section className='flex-cont'>


        {propertiesForRent.map((property)=><Property property={property} key={property.id}/>)}
        </section>

   
        <h2>for rent</h2>
        <section className='flex-cont'>
        {propertiesForSale.map((property)=><Property property={property} key={property.id}/>)}
        </section>
        
        
      </section>

    
      </>
  )
}


export async function getStaticProps(){


  const propertyForSale= await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=8`);

  const propertyForRent= await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`);

  return {
    props:{
     propertiesForSale:propertyForSale?.hits,
     propertiesForRent:propertyForRent?.hits,
    }
  }

}