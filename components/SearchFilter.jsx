import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { filterData, getFilterValues } from "../utils/filterData";
export default function SearchFilter() {
  const [filters] = useState(filterData);
  const router = useRouter();

  function searchProperties(filterValues) {

    const path = router.pathname;
    const {query}=router;
   
const values = getFilterValues(filterValues);
values.forEach((item)=>{
    if(item.value){

        query[item.name]=item.value;
    }
})

router.push({pathname:path , query});

  }


  return (
    <>
 
      <div className="flex-cont w-2/3  filtersCont">
      
        {filters.map((filter) => (
          <div key={filter.queryName}>
      
            <select 
            className="filter"
            placeholder={filter.placeholder}
            onChange={(e) => searchProperties({
                [filter.queryName]:e.target.value,
            })}>
                <option value="" disabled selected>
                    {filter.placeholder}
                </option>
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>{item.name}</option>
              ))}
            </select>
          </div>
        ))}


      </div>
    </>
  );
}
