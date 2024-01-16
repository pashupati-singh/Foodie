import React, { useEffect, useState } from 'react'
import Pagination from "@mui/material/Pagination";
import { useSelector } from 'react-redux';


export const Page = ({handlePage}) => {
    const itemsPerPage = 3
    const[page,setPage] = useState(0)
    const {data} = useSelector((store)=>store.foodReducer);
   

    const handleChange = (event, value) => {
        setPage(value);
        const startIndex = (value - 1) * itemsPerPage;
        const endIndex = value * itemsPerPage;
        const displayedData = data.slice(startIndex, endIndex);
        handlePage(displayedData)
      };

      return (
        <div>
          <Pagination style={{width:"35%",margin : "auto"}} color='primary' count={Math.ceil(data.length / itemsPerPage)} page={page} onChange={handleChange} />
        </div>
  )
}

