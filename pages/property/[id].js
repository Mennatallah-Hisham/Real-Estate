import { fetchApi } from "../../utils/fetchApi";
import { baseUrl } from "../../utils/fetchApi";
import millify from "millify";

import ImageSlider from "../../components/ImageSlider";

export default function PropertyDetails({property:{title, description,rooms,baths,area ,price, photos}}){


    return(
        <>
      
     

        <ImageSlider photos={photos}/>
     

        <p className="text-center my-8 text-primary font-bold text-2xl">{title}</p>
        <div className="flex flex-wrap justify-center gap-12 my-10">
    <div>
    <p className="text-lg my-3"> <span className="font-semibold text-primary  capitalize"> rooms :
    </span> {rooms} </p>
    <p className="text-lg my-3"> <span className="font-semibold text-primary capitalize"> baths :
    </span> {baths} </p>
    </div>
    
 <div>

 <p className="text-lg my-3"> <span className="font-semibold text-primary capitalize"> area :
    </span> {millify(area)} sqft </p>
    <p className="text-lg my-3"> <span className="font-semibold text-primary capitalize"> price :
    </span> {millify(price) } AED  </p>
 </div>

    
</div>
    

        <p className="my-3 w-sm mx-auto md:w-md lg:w-lg text-center"> {description.length > 900 ? description.substring(0, 300)  : description} </p>
        <p className="my-3 w-sm mx-auto md:w-md lg:w-lg text-center"> {description.length > 600 ? description.substring(300,600 )  : description} </p>
        <p className="my-3 w-sm mx-auto md:w-md lg:w-lg text-center"> {description.length > 600 ? description.substring(600,)  : description} </p>

        </>
    );
}


export async function getServerSideProps({query}
){
const {id}=query;



    const response = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return({
        props:{
           property:response,
        },
    })
}