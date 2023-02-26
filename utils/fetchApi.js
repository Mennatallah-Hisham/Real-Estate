import axios from "axios";

export const baseUrl="https://bayut.p.rapidapi.com";


export async function fetchApi (url){

    const response = await axios.get(url,{

        headers: {
    'X-RapidAPI-Key': '6b8ae83235msh4d98446b74048aep1fda73jsn1b46b2daec26',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }

    });


return response.data;

}