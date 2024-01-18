import React, { useState } from 'react'
import style from "../css/NavBar1.module.css"
import { MiddleContent } from './MiddleContent'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
export const NavBar1 = () => {
  // const[show,setShow] = useState(false)
  const {name} = useSelector((store)=>store.authReducer)
  const {isAuth} = useSelector((store)=>store.authReducer)

  // if(isAuth){
  //   setShow(true)
  // }

  console.log(name)

  return (
    <nav>
        <div className= {style.nav}>
            <div className={style.navText}>
           <Link className={style.Link1} to={"/resturant"}>Add Resturant</Link>
           {isAuth? <h3>{name}</h3>: <Link className={style.Link1} to={"/login"}>Login</Link> }
           
           <Link className={style.Link1} to={"/sign"}>Sign Up</Link>
            
            </div>
        </div>


        <div className={style.middle}>
            <MiddleContent />
        </div>
    </nav>
  )
}
