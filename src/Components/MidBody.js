import React from 'react'
import Card from './Card'
const MidBody = () => {


    const cardData =[
        {
            title:"Commencement Of Buisness",
            desc:"invested shareholders must confirm payment and office address",
            dueDate:"With in 30 days",
            penaltyFees:"Rs 5000 one time"
        },
        {
            title:"Commencement Of Buisness",
            desc:"invested shareholders must confirm payment and office address",
            dueDate:"With in 30 days",
            penaltyFees:"Rs 5000 one time"
        },
        {
            title:"Commencement Of Buisness",
            desc:"invested shareholders must confirm payment and office address",
            dueDate:"With in 30 days",
            penaltyFees:"Rs 5000 one time"
        },
        {
            title:"Commencement Of Buisness",
            desc:"invested shareholders must confirm payment and office address",
            dueDate:"With in 30 days",
            penaltyFees:"Rs 5000 one time"
        },
        {
            title:"Commencement Of Buisness",
            desc:"invested shareholders must confirm payment and office address",
            dueDate:"With in 30 days",
            penaltyFees:"Rs 5000 one time"
        },
        {
            title:"Commencement Of Buisness",
            desc:"invested shareholders must confirm payment and office address",
            dueDate:"With in 30 days",
            penaltyFees:"Rs 5000 one time"
        },

    ]
  return (
    <div className='Mid-container'>
          <h1>
             Want to <span className="purple-text">Join</span> Us?

          </h1>
          <p>
            To reamin with us you mush need to follow this steps provided
          </p>
         
          <div className="card-container" >
        {cardData &&
          cardData.length &&
          cardData.map((item, index)=> <Card data={item} key={index} />)}
      </div>
      <p className='message'>
           * For forms AOC-4 and MSG-7,you will be charged a penalty of RS 200 <b> everyday</b> until you file the form.
          </p>
    </div>
  )
}

export default MidBody