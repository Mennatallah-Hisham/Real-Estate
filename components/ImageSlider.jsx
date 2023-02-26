import { useState } from "react";
export default function ImageSlider({photos}){
    const [index,setIndex]=useState(0);
    const length =photos.length;

    function next (){
        if(index===length-1){
            setIndex(0);
        }else{

            setIndex((prev)=>prev+1);
        }

    }

    function prev(){
        if(index===1){
            setIndex(length-1);
        }else{

            setIndex((prev)=>prev-1);
        }

    }
    return(
        <>
       
        {length===0 && <p className="text-primary text-center ">no image</p>}
        {length>0 &&<section className="flex flex-col gap-5 items-center border-l    mt-5 ">

        <div className="w-sm md:w-md lg:w-lg" >
        <img src={photos[index]?.url} alt={photos[index].title} key={photos[index].id} 
        width="100%"
        className="mx-auto"/>
        </div>
   
        <div className="flex gap-4">
        <button onClick={prev} className="btn">prev</button>
        <button  className="btn" onClick={next}>next</button>

        </div>

        </section>}

        </>
    )
}