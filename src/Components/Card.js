import React from 'react'

const Card = ({data,key}) => {
  return (
    <div  className ='card'> 
    <h3> {data.title}</h3>  
    <span> {data.desc}</span>
    <div className='lower-div'>
      
      <div className='left-section'>
         <h3 className='Blue-text'>Due Date</h3>
         <span>{data.dueDate}</span> 
      </div>
      <div  className='right-section'>

        <h3 className='pink-text'>Penalty Fees</h3>
        <span>{data.penaltyFees}</span>  
      </div>
    </div>
    </div>
  )
}

export default Card