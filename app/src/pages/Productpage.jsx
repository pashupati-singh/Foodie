import React, { useEffect, useState } from 'react'
import { NavBarFoodiePage } from './NavBarFoodiePage'
import style from "../css/ProductPage.module.css"
import { Link, useParams } from 'react-router-dom'
import Image from "../Image/foodproduct.png"
import { Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux'
import { cartGetFunction, cartProductAddFunction } from '../Redux/CartRedux/action'
import { Footer } from './Footer'

export const Productpage = () => {
  const[data1,setData] = useState({})
  const id = useParams();
  const dispatch = useDispatch();
  const [idd,setID] = useState(false)
const {token} = useSelector((store)=>store.authReducer)


  const FetchData1 = async() =>{
     try {
        fetch(`http://localhost:8080/Product?_id=${id._id}`)
        .then((res)=>res.json())
        .then((data)=>setData(data))
        .catch((err)=>console.log(err))
     } catch (error) {
         console.log(error);
     }
  }
    const {description,food,image,location,price,quantity,rating,restaurant,type} = data1;
 

    const handleCardButton = () =>{
     const obj = {
        description,food,image,location,price,quantity,rating,restaurant,type
     }
      dispatch(cartProductAddFunction(obj,token))
      setID(!idd)
    }

    useEffect(()=>{
      FetchData1()
    },[])

    const FetchData = async (token) =>{
      dispatch(cartGetFunction(token))
  }
  useEffect(()=>{
  FetchData(token)
  },[token,idd])
  

  return (
    <div>
      <NavBarFoodiePage/>

      
             <div className={style.container}>
             <div className={style.box1}>
             <div style={{width:"80%"}}>
             <img src={Image} alt="errr" width={"400px"}  />
             </div>
            <div style={{marginLeft:"10px",marginTop:"-30px"}}> <h2 className={style.name}>{food}</h2>
              
              <p><b>Resturant:</b>{restaurant}</p>
              <p><b>Price:</b>{price} for you</p>
              <p><b>Description:</b>{description}</p>
              <p><b>Quantity: {quantity}</b></p>
              </div>
              <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"end"}}>
                {/* {changed? */}
                <Button className={style.edit1} onClick={handleCardButton} variant="contained">Add to Cart</Button>
                 {/* :<Button className={style.edit3} variant="contained"><CheckIcon /> Added to cart</Button> */}
                {/* } */}
              
             <Link> <Button className={style.edit2} variant="contained">Buy now</Button></Link>
              </div>
             </div>
             <div className={style.box2}>
              <img src={image} alt="errr" className={style.image} />
             </div>
           </div>
     
  
    <Footer />
    </div>
  )
}
