
import React from 'react';
import flag from "../Image/india-flag.jpg";
import style from "../css/Locationpage.module.css";
import { Link } from 'react-router-dom';

export const Locationpage = () => {
  return (
    <div>
      <h1 className={style.locationText} style={{ textAlign: "center" }}>
        Popular locations in <img style={{ borderRadius: "4px" }} src={flag} alt="error" width={"50px"} height={"35px"} /> India
      </h1>

      <p style={{ width: "60%", fontSize: "20px", textAlign: "center", margin: "auto", fontWeight: "lighter" }}>
        From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all.
        Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.
      </p>

      <div className={style.locationBox}>
        <p className={style.smallBox}>
          <Link to={"/product/Lucknow"}>Lucknow</Link> <span style={{ marginLeft: "10px" }}>{">>>"}</span>
        </p>
        <p className={style.smallBox}>
          <Link to={"/product/patna"}>Patna</Link><span style={{ marginLeft: "10px" }}>{">>>"}</span>
        </p>
        <p className={style.smallBox}>Noida<span style={{ marginLeft: "10px" }}>{">"}</span></p>
        <p className={style.smallBox}>Greater Noida<span style={{ marginLeft: "10px" }}>{">"}</span></p>
        <p className={style.smallBox}>Delhi<span style={{ marginLeft: "10px" }}>{">"}</span></p>
        <p className={style.smallBox}>Ballia<span style={{ marginLeft: "10px" }}>{">"}</span></p>
      </div>
    </div>
  );
};
