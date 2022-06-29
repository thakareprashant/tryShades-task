import React from 'react'
import './Header.css'
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import headerObj from './HeaderObject';

export const Header = () => {
  return (
    <>
     <div className='main-header-container'>

       <div className='header-container'>
          

          {
              headerObj.map((ele, idx)=>{
                  if (idx === 0){
                      return (
                        <div className='header-body'>
                    <div className='header-body-content'>
                       <AppleIcon/>

                      </div>
                 </div>
                      )
                  }
                  if (ele.name === "search"){
                      return (
                        <div className='header-body'>
                    <div className='header-body-content'>
                       <SearchIcon/>

                      </div>
                 </div>
                      )
                  }
                return(
                    
                    <div className='header-body'>
                    <div className='header-body-content'>
               {ele.name}

           </div>
           </div>
                )
              })
          }
           
            

          
       </div>

     </div>


    </>
  )
}
