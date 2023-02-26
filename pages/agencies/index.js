
import { fetchApi } from "../../utils/fetchApi";
import { baseUrl } from "../../utils/fetchApi";
import Agency from "../../components/Agency";
export default function Agencies({ agencies }){

    return(
        <>
        <h2> our agencies</h2>
        <section className="flex-cont">
        {
           agencies.map((agency)=>(
                <Agency key={agency.id} agency={agency}/>
           ))
        }

        </section>
      
        
        </>
    )
}


export async function getServerSideProps(){


    const response = await fetchApi(`${baseUrl}/agencies/list?query=''`);


    return  {
        props:{
            agencies:response?.hits,
        }
    }
   

}