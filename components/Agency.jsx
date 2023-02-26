
export default function Agency ({agency}){

    const{
        name,product,location,logo,phoneNumber
    }= agency;

    return(
        <>
        <article className=" shadow-lg flex  flex-col justify-center items-center gap-6  w-full  md:w-sm p-2 rounded-sm h-agency ">

     
        <img src={logo?.url} width="150px" height="200px"  className="mx-auto"/>
        <br></br>
        <div>

       
        <p className="text-primary font-semibold text-lg text-center">{name}</p>
        <p className="text-center my-3">
        <span className="tag">{product}</span>

        </p>
 
      
      
        <p className="text-lg my-3"> <span className="font-semibold text-primary  capitalize"> location :
    </span> {location} </p>
        <p className="text-lg my-3"> <span className="font-semibold text-primary  capitalize"> phone :
    </span> {phoneNumber.mobile? phoneNumber.mobile : "----"} </p>
    </div>
        </article>
        </>

    )
}