import React, { useEffect, useState } from 'react'
import style from '../css/Food.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { foodFunction } from '../Redux/FoodRedux/action';
import { Foodpage } from './Foodpage';
import { NavBarFoodiePage } from './NavBarFoodiePage';
import { FilterPage } from './FilterPage';
import { Footer } from './Footer';
import { Page } from './Pagination';


export const Singlepage = () => {
  const[searchT,setSearchT] = useState(false);
  const[data1,setData1] = useState([])
  const [food,setFood] = useState([])
  const {text} = useParams();
 const disptach = useDispatch()
 
  const FoodData = data1.filter((el)=>(el.location===text))
  const handlePage = (page) => {
      setData1(page)
}
const handleSearching = (value)=>{
  if(value !== ""){
    setSearchT(true);
  }else{
    setSearchT(false)
  }
  setFood(data1.filter((el)=>el.food=== value))
 }


 useEffect(()=>{
  disptach(foodFunction(text))
},[text])


  return (
    <>
    <NavBarFoodiePage handleSearching = {handleSearching} />
    <FilterPage />
    <p style={{display:"flex", justifyContent:"flex-start", fontSize:"30px",fontWeight:"inherit" , marginLeft:"30px",marginBottom:"4ss0px",fontFamily:"sans-serif"}}>Delivery in {text}</p>
    <div >
      {searchT? <div className={style.card}>{food.map((el)=>(
      <div key={el._id} className={style.mapped} >
          <Foodpage key={el._id} {...el} />
      </div>
      ))}</div> :<div className={style.card}>{FoodData.map((el)=>(
      <div key={el._id} className={style.mapped}>
          <Foodpage key={el._id} {...el} />
      </div>
      ))}</div>}
    </div>
    <Page handlePage = {handlePage}/>
    <Footer />
    </>
  )
}
