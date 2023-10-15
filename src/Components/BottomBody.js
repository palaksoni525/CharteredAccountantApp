import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PeopleIcon from '@mui/icons-material/People';
import ResearchIcon from '@mui/icons-material/Assignment';
import Academy from '@mui/icons-material/School';
const BottomBody = () => {
  return (
    <div className='BottomBody'>
      <div className='left-section '>
    <h1>
     <span  className='purple-text'> <b>All-in-One Playform</b></span>  That Makes Easier
      
    </h1>
    <p>
           We are more than a platform ,we are your partner.Discover our services to achive you buissness and educational goals.
      </p>
      <div  className='lower-section'> 
       <div  className='inner-section'>
          <SearchRoundedIcon className="icons" />
            <p>
                 <b className='Blue-text'>Search</b> for vital  comapny information
            </p>
       </div>
       <div className='inner-section'>
        <PeopleIcon   className="icons"/>
          <p>
              <b className='Blue-text'>Connect</b> with the resources to meet buisness needs.
          </p>
       </div>
       <div className='inner-section'>
         <ResearchIcon  className="icons" />
         <p>
         <b className='Blue-text'>Research</b> and generate reports that drive growth.
         </p>
       </div>
       <div className='inner-section'>
           <Academy className="icons" />
           <p>
             <b className='Blue-text'> Academy </b>to give you success in your career.
           </p>

       </div>

    </div>
    </div>
    
    <div className='right-section'>


    
           <img  className='bottom-img1' src='https://i.pinimg.com/236x/b2/8c/12/b28c12995be8ad69d51fedbe56bba223.jpg' />
           <div  className='circle2'>

           </div>
           
           <img  className='bottom-img2' src='https://i.pinimg.com/236x/40/f0/8b/40f08b15e761494fe8a3fd8e7a801c96.jpg' /> 
           
            <div className='circle1'>
               
               </div>
               <div className='circle2'>
               
               </div>
               <div className='circle3'>
               
               </div>

    
    </div>
  </div>
  )
}

export default BottomBody