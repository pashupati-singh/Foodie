import React, { useEffect } from 'react'
import { BestChoice } from './BestChoice'
import { TopBrands } from './TopBrands'


export const FilterPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
       <BestChoice />
       <TopBrands />
    </div>
  )
}
