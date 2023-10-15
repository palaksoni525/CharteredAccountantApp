import React from 'react'
import SearchBar from './SearchBar'
import MidBody from "./MidBody"
const UpperBody = () => {
  return (
    <div className ='UpperBody-container'>
          <div  className='left-div'>
          <h1>
             Find <span className="purple-text">Partners</span>(CAs) Online
              
         </h1> 
         <p>
            CONNECT with us where services are available online.
         </p>

         <div>
                <SearchBar />
           </div>
          </div>
            

          <div className='right-div'>
            
             <img  src="https://i.pinimg.com/236x/a5/b4/bd/a5b4bd4b6e64c39097529f9a0054e5b9.jpg"  className='image left-img'/>
              <img  src="https://i.pinimg.com/236x/e6/73/50/e6735062a77cb2c5c16f4fbe9a06b9b1.jpg" className='image mid-img'  />
              <img src="https://i.pinimg.com/564x/32/5b/df/325bdf1b0ea9046fb831f79cd0d469bc.jpg" className='image right-img' />
     
          </div>
    </div>
  )
}

export default UpperBody