import React, { useEffect, useState } from 'react'
import image from "../Image/foodies.png"
import style from "../css/Nav.module.css"
import { TextField,Box, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';
import { Locationpage } from './Locationpage';
import { Link } from 'react-router-dom';

export const NavBarFoodiePage = ({handleSearching}) => {
  const [search,setSearch] = useState("");
  const {text} = useSelector((store)=>store.foodReducer)
  const {name} = useSelector((store)=>store.authReducer)
  const {isAuth} = useSelector((store)=>store.authReducer)
  const [location,setLocation] = useState(false)


  const handleClick = () =>{
    handleSearching(search)
  }

  return (
    <div>
        <div className={style.nav1}>
        <div className={style.nav}>
            <div className={style.home}>
            <img src={image} alt="error" />
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
                    <Link to="/cart">CART</Link>
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
