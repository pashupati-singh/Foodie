import React, { useState } from 'react'
import style from "../css/BestChoice.module.css"



let array = [{"id":1,"name":"McDonald's","image":"https://dog55574plkkx.cloudfront.net/storelogo/web/mcdonalds.png"},{"id":2,"name":"Bikanervala","image":"https://images.jdmagicbox.com/comp/delhi/12/011p96112/catalogue/bikanervala-foods-pvt-ltd-corporate-office-lawrence-road-delhi-chips-manufacturers-lzo6jfq7qg.jpg"},{"id":3,"name":"La Pino'z","image":"https://www.uengage.in/images/addo/logos/logo-5-1600769708.png"},{"id":4,"name":"Pizza Hut","image":"https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/1088px-Pizza_Hut_logo.svg.png"},{"id":5,"name":"Chicken","image":"https://justdialvideos3.akamaized.net/images/9f/46/9f46c884-3265-4fe5-b3e7-1ab559b12dec/fbvideo-154825898875372562-011pxx11_xx11_180919191648_g9n1-72562_600x424_00h.00m.05s.jpg"}]

// {"id":6,"name":"Bhagat Halwai","image":"https://play-lh.googleusercontent.com/jftilAJCwaO6qI6bRmftd_rLYLrENdeXmfE0vdeCd5WJXWRPVWkQs24_pyqJfSy6esaA=w600-h300-pc0xffffff-pd"},{"id":7,"name":"KFC","image":"https://www.mediainfoline.com/wp-content/uploads/2023/08/KFC-Chicken-Bucket-Price-A-Global-Comparison.jpg"},{"id":8,"name":"Kwality Wall’s","image":"https://lh3.googleusercontent.com/vuk0G4aOJP0Ro1gbTc_SiR7ifyVRiQ5uoU1pvNbF12wkus_-v1X4MscQWm0ZsSLhmrLbSom-Zwn99UNLK1HW42HynstWMVl2dyMziHs"}

export const TopBrands  = () => {
    const itemsToShow = 5;
    const [currentIndex, setCurrentIndex] = useState(0);


    const prevSlide = () => {
        setCurrentIndex(Math.max(currentIndex - 1, 0));
      };
    
      const nextSlide = () => {
        setCurrentIndex(Math.min(currentIndex + 1, array.length - itemsToShow));
      };

       
  const updateButtons = () => {
    return {
      displayPrev: currentIndex === 0 ? 'none' : 'block',
      displayNext: currentIndex + itemsToShow >= array.length ? 'none' : 'block',
    };
  };

  const { displayPrev, displayNext } = updateButtons();
    
  return (
    <div className={style.container2}>
          <p style={{display:"flex", justifyContent:"flex-start", fontSize:"30px",fontWeight:"inherit" , marginLeft:"30px",marginBottom:"10px"}}>Top Brands</p>
    <div style={{ display: 'flex', transition: 'transform 0.5s ease-in-out', width: `${array.length * (100 / itemsToShow)}%`, transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
     <div className={style.container}>
        {array.map((el)=>(
        <div key={el.id} className={style.container1} >
           
            <div className={style.imgDiv}>
            <img className={style.img} src={el.image} alt="err" />
            </div>
            
            <p className={style.name}>{el.name}</p>
        </div>
     ))}</div>
     </div>
  </div>
  )
}


