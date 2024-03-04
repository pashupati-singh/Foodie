import React, { useEffect, useState } from 'react'
import style from "../css/NavBar1.module.css"
import { MiddleContent } from './MiddleContent'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export const NavBar1 = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);
  const {name} = useSelector((store)=>store.authReducer)
  const {isAuth} = useSelector((store)=>store.authReducer)
  const [state, setState] = React.useState({
    left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={style.left}
    >
           
           {isAuth? <h3>{name}</h3>: <Link className={style.Link1} to={"/login"}>Login</Link> }
           <Link to={"/resturant"}>Add Resturant</Link>
           <Link  to={"/sign"}>Sign Up</Link>
           <Link>About us</Link>
           <Link>Contact us</Link>
           <Link></Link>

      <Divider />
    </Box>
  );



  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <nav>
        <div className= {style.nav}>
            <div >
              {isSmallScreen? <div className={style.smallIcons}>  <div>
          <Button onClick={toggleDrawer("left", true)}><DensitySmallIcon /></Button>
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
    </div> </div> : <div className={style.navText}>
           <Link className={style.Link1} to={"/resturant"}>Add Resturant</Link>
           {isAuth? <h3>{name}</h3>: <Link className={style.Link1} to={"/login"}>Login</Link> }
           
           <Link className={style.Link1} to={"/sign"}>Sign Up</Link>
            </div>}
            </div>
        </div>


        <div className={style.middle}>
            <MiddleContent />
        </div>
    </nav>
  )
}
