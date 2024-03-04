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
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

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
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

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
           <Link to={'/cart'}>Cart</Link>
           <Link></Link>

      <Divider />
    </Box>
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSmallScreen]); 

  const handleClick = () =>{
    handleSearching(search)
  }

  useEffect(() => {
    const FetchData = async (token) => {
      await dispatch(cartGetFunction(token));
    };
  
    FetchData(token)
      .then(() => {
        setCartValue(cart.length);
      })
      .catch((error) => {
        console.error('Error fetching cart data:', error);
      });
  }, [token]); 
  
  // Update cartValue on initial render
  useEffect(() => {
    setCartValue(cart.length);
  }, [cart.length]);
  
  

  return (
    <div>
        <div className={style.nav1}>
        <div className={style.nav}>
        <Link to={`/product/Lucknow`}><img src={image} alt="error" /></Link>
        
        <div className={style.search} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <TextField 
              margin="normal"
              required
              label="Search"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <Button variant="text" onClick = {handleClick}><SearchIcon className={style.icon}/></Button>
            
            </div>
        {isSmallScreen? <div className={style.smallIcons}>  <div>
          <Button onClick={toggleDrawer("left", true)}><DensitySmallIcon /></Button>
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
    </div> </div> :
            <div className={style.home}>
  
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} onClick={()=>setLocation(!location)}>
            <HomeIcon color="success" className={style.HomeIcon}  />
            <p style={{color:"green", fontWeight:"bolder", fontSize:"20px"}}>{text}</p>
            </div>
            <div className={style.login}>
                <p>
                {isAuth? <h3>{name}</h3>:<Link to="/login">Login</Link>}
                </p>
                <p style={{textAlign:"center", listStyle:"none"}}>
                    <Link to="/sign">Signup</Link>
                </p>
                <p style={{textAlign:"center"}}>
                    {isAuth? <div>
                    <Link to="/cart">
                    <Badge badgeContent={cartValue} color="primary">
                    <AddShoppingCartIcon color="action" />
                    </Badge></Link>
                    </div>:""}
                </p>
            </div>

        </div>
        
}
</div>

        </div>
            <div>
            {location?<Locationpage />:""}
            </div>
    </div>
  )
}
