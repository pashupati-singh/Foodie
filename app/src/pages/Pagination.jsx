import React, { useEffect, useState } from 'react'
import Pagination from "@mui/material/Pagination";
import { useSelector } from 'react-redux';


export const Page = ({handlePage}) => {
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);
  const { data } = useSelector((store) => store.foodReducer);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const displayedData = data.slice(startIndex, endIndex);
    handlePage(displayedData);
  }, [page, data, handlePage]);

  const handleChange = (event, value) => {
    setPage(value);
  };


      return (
        <div>
          <Pagination style={{width:"35%",margin : "auto"}} color='primary' count={Math.ceil(data.length / itemsPerPage)} page={page} onChange={handleChange} />
        </div>
  )
}

