import React, { useEffect, useState } from 'react'
import image from "../Image/foodies.png"
import style from "../css/Nav.module.css"
import { TextField,Box, Button, Badge } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, useSelector } from 'react-redux';
import { Locationpage } from './Locationpage';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { cartGetFunction } from '../Redux/CartRedux/action';

export const NavBarFoodiePage = ({handleSearching}) => {
  const [search,setSearch] = useState("");
  const {text} = useSelector((store)=>store.foodReducer)
  const {name} = useSelector((store)=>store.authReducer)
  const {isAuth} = useSelector((store)=>store.authReducer)
  const [location,setLocation] = useState(false)
  const {cart} = useSelector((store)=>store.cartReducer)
  const [cartValue,setCartValue] = useState(0)
  const {token} = useSelector((store)=>store.authReducer)

  const dispatch = useDispatch()

  const handleClick = () =>{
    handleSearching(search)
  }
  useEffect(()=>{
    setCartValue(cart.length);
  },[cartValue])

  
  const FetchData = async (token) =>{
    dispatch(cartGetFunction(token))
}
useEffect(()=>{
FetchData(token)
},[token])


  return (
    <div>
        <div className={style.nav1}>
        <div className={style.nav}>
            <div className={style.home}>
            <Link to={`/product/${text}`}><img src={image} alt="error" /></Link>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} onClick={()=>setLocation(!location)}>
            <HomeIcon color="success" className={style.HomeIcon}  />
            <p style={{color:"green", fontWeight:"bolder", fontSize:"20px"}}>{text}</p>
            </div>
            
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <TextField 
              margin="normal"
              required
              label="Search"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <Button variant="text" onClick = {handleClick}><SearchIcon className={style.icon}/></Button>
            
            </div>
            <div className={style.login}>
                <p>
                {isAuth? <h3>{name}</h3>:<Link to="/login">Login</Link>}
                </p>
                <p style={{textAlign:"center"}}>
                    <Link to="/sign">Signup</Link>
                </p>
                <p style={{textAlign:"center"}}>
                    <Link to="/cart">
                    <Badge badgeContent={cartValue} color="primary">
                    <AddShoppingCartIcon color="action" />
                    </Badge></Link>
                </p>
            </div>
        </div>
        </div>
            <div>
            {location?<Locationpage />:""}
            </div>
    </div>
  )
}
