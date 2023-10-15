import React from 'react' ;
import {Rating} from '@mui/material';
import "../Details/Details.css"
const RecommendationCard = ({item}) => {
  return (
    <div className='Recommentation-container'>
        <h3>{item.name}</h3>
        <p>I will do buissness evaluation and coorperate service</p>
        <Rating name="read-only" value={item .rating} readOnly />
        <p className='review'> {item.rating} <span>(</span>{item.reviewCount}<span>)</span></p>
        <button className='btn1'>View Services</button>
    </div> 
  )
}

export default RecommendationCard