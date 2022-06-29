import React from 'react'
import './Productcard.css'
import productObj from './ProductcardObject'


const Productcard = () => {
  return (
   <>
    <div className='product-card-main-container'>
    {
        productObj.map((ele,idx)=>{
           

            return(<>

                
                <div className={'product-card-container'}>
                <div className="product-title">{ele.title}</div>
                <div className="product-learn-more"><a href='sss'>Learn here →</a></div>
                <div className="product-buy-more"><a href='sss'>Buy →</a></div>
                <img  className="product-image"src={ele.image} alt='product-image'>
                </img>
        </div>
        </>
            )
        })
    }
        
    </div>

   </>
  )
}
export default Productcard;