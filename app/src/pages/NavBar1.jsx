import React from 'react'
import style from "../css/NavBar1.module.css"
import { MiddleContent } from './MiddleContent'
import {Link} from "react-router-dom"
export const NavBar1 = () => {
  return (
    <nav>
        <div className= {style.nav}>
            <div className={style.navText}>
           <Link className={style.Link1} to={"/resturant"}>Add Resturant</Link>
           <Link className={style.Link1} to={"/login"}>Login</Link>
           <Link className={style.Link1} to={"/sign"}>Sign Up</Link>
            
            </div>
        </div>


        <div className={style.middle}>
            <MiddleContent />
        </div>
    </nav>
  )
}
