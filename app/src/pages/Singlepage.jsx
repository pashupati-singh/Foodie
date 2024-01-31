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
  const {data} = useSelector((store)=>store.foodReducer);
  const [food,setFood] = useState([])
  const {text} = useParams();
 const disptach = useDispatch()
 
// const {token} = useSelector((store)=>store.authReducer)
   
  const FoodData = data1.filter((el)=>(el.location===text))

  //  console.log(token);
  const handlePage = (page) => {
      setData1(page)
}
  console.log(data);

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
      {searchT? <div style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)", columnGap:"-100px",rowGap:"50px", marginTop:"10px"}}>{food.map((el)=>(
      <div key={el._id} className={style.mapped} style={{width:"300px",height:"300px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",borderRadius:"10px",margin:"20px",marginTop:"-20px"}}>
          <Foodpage key={el._id} {...el} />
      </div>
      ))}</div> :<div style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)", columnGap:"-100px",rowGap:"50px", marginTop:"10px"}}>{FoodData.map((el)=>(
      <div key={el._id} className={style.mapped} style={{width:"300px",height:"300px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",borderRadius:"10px",margin:"20px",marginTop:"-20px"}}>
          <Foodpage key={el._id} {...el} />
      </div>
      ))}</div>}
    </div>
    <Page handlePage = {handlePage}/>
    <Footer />
    </>
  )
}
