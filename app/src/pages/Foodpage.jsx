import React from 'react'
import style from '../css/Food.module.css'
import { Badge } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

export const Foodpage = ({_id,description,food,image,location,price,quantity,rating,restaurant,type}) => {
  return (
  
      <div >
        <Link to={`./${_id}`}><img className={style.image} src={image} alt="Food Image" /></Link>
        <div style={{lineHeight: ".4"}}>
          <div style={{display:"flex",justifyContent:"space-around"}}>
          <p style={{textAlign:"start",fontWeight:"600",fontFamily: "Century Gothic,Verdana,sans-serif", fontSize:"20px",marginLeft:"-40px" }}>{food}</p>
          <Badge style={{marginTop:"25px"}} badgeContent={<div style={{display:"flex",alignItems:"center"}}>{rating}<StarIcon fontSize="10px" /> </div>} color="success" className={style.badge} />
          </div>
         <div style={{margin:"0 10px 0 15px", display:"flex",justifyContent:"space-between",fontFamily: "Century Gothic,Verdana,sans-serif"}}>
          <p>{restaurant}</p>
         <p>{price}₹ for you</p>
         
         </div>
        </div>
      </div>
    
  )
}
