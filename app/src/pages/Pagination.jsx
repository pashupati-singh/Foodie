import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useSelector } from 'react-redux';
import style from '../css/Food.module.css'

export const Page = ({ handlePage }) => {
  const [page, setPage] = useState(1);
  const { data } = useSelector((store) => store.foodReducer);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  function getItemsPerPage() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1000) {
      return 3;
    } else if (screenWidth >= 700 && screenWidth < 1000) {
      return 4;
    } else {
      return 4;
    }
  }

  useEffect(() => {
    setItemsPerPage(getItemsPerPage());
  }, [data]);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const displayedData = data.slice(startIndex, endIndex);
    handlePage(displayedData);
  }, [page, data, itemsPerPage]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleResize = () => {
    setItemsPerPage(getItemsPerPage());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Pagination
      className={style.page}
      style={{margin:"auto"}}
        color="primary"
        count={Math.ceil(data.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};


