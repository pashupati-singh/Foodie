import React from 'react'

let array = [{"id":1,"name":"Pizza","image":"https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg"},{"id":2,"name":"Biryani","image":"https://slurrp.club/wp-content/uploads/2021/10/DSC_0037-2.jpg"},{"id":3,"name":"Cake","image":"https://res.cloudinary.com/insignia-flowera-in/images/f_auto,q_auto/v1688048048/Heart-Shape-Red-velvet-cake_7190e7cfa/Heart-Shape-Red-velvet-cake_7190e7cfa.jpg"},{"id":4,"name":"Burger","image":"https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe-500x375.jpg"},{"id":5,"name":"Thali","image":"https://media.post.rvohealth.io/wp-content/uploads/2020/07/thali-indian-732x549-thumbnail.jpg"},{"id":6,"name":"Chicken","image":"https://www.skinnytaste.com/wp-content/uploads/2023/07/BBQ-Chicken-8.jpg"},{"id":7,"name":"Rolls","image":"https://scruffandsteph.com/wp-content/uploads/2018/09/Vietnamese-Spring-Rolls-2.jpg"},{"id":8,"name":"North Indian","image":"https://c8.alamy.com/comp/2DJC372/north-indian-thali-top-view-roti-pappad-rice-and-variety-of-curries-in-a-meal-indian-meal-for-lunch-and-dinner-2DJC372.jpg"},{"id":9,"name":"Paneer","image":"https://www.eitanbernath.com/wp-content/uploads/2020/05/Butter-Paneer-1-4x5-LOW-RES-819x1024.jpeg"},{"id":10,"name":"Momos","image":"https://i0.wp.com/passion2cook.com/wp-content/uploads/2023/03/paneer-momos-1.jpg?resize=768%2C1024&ssl=1"},{"id":11,"name":"Dosa","image":"https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg"},{"id":12,"name":"Paratha","image":"https://static01.nyt.com/images/2020/10/08/dining/fh-mughlai-paratha/merlin_177593343_8829b4e7-f3c2-478e-927d-e5ab263ae515-threeByTwoMediumAt2X.jpg"}]

export const FirstDiv = () => {
  return (
    <div>{array.map((el)=>(
        <div key={el.id} >
            <img src={el.image} alt="err" />
            <h3>{el.name}</h3>
        </div>
    ))}</div>
  )
}
