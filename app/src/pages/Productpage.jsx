import React, { useEffect, useState } from 'react'
import { NavBarFoodiePage } from './NavBarFoodiePage'
import { Footer } from './Footer'
import style from "../css/ProductPage.module.css"
import { useParams } from 'react-router-dom'

export const Productpage = () => {
  const[data,setData] = useState({})
  const id = useParams();
  


  const FetchData = async() =>{
     try {
        fetch(`http://localhost:8080/Product?_id=${id._id}`)
        .then((res)=>res.json())
        .then((data)=>setData(data))
        .catch((err)=>console.log(err))
     } catch (error) {
         console.log(error);
     }
  }
    console.log(data);

    useEffect(()=>{
      FetchData()
    },[])

  // location:"Lucknow" price:298.53 quantity : 8rating
  //   : 
  //   2.6
  //   restaurant
  //   : 
  //   "Masala Grill"
  //   type
  //   : 
  //   "Veg"

  return (
    <div>
      <NavBarFoodiePage/>

      
             <div className={style.container}>
             <div className={style.box1}>
             {/* <img src={data.image} alt="errr" className={style.image} /> */}
            <div style={{marginLeft:"10px"}}> <h2 className={style.name}>{data.food}</h2>
              
              <p>Resturant:{data.restaurant}</p>
              <p>{data.type === "veg" ? "Vegetarian":"Non-Vegetarian"}</p>
              <p>{data.description}</p></div>
             </div>
             <div className={style.box2}>
              <img src={data.image} alt="errr" className={style.image} />
             </div>
           </div>
     
  
      <Footer />
    </div>
  )
}
