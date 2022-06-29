import React from 'react'
import './Bottomcard.css'
import bottoProductCard from './BottomCardObject'

 const Bottomcard = () => {
  return (
    <>
    <div className={'bottom-product-card-main-container'}>
    {
        bottoProductCard.map((ele)=>{
            return(
                <div className={'bottom-product-card-container'}>
                <div className="bottom-product-title">{ele.title}</div>
                <div className="bottom-product-learn-more"><a href='sss'>Learn here →</a></div>
                <div className="bottom-product-buy-more"><a href='sss'>Buy →</a></div>
                <img  className="bottom-product-image"src={ele.image} alt='product-image'>
                </img>
    </div>


            )
        })
    }
    </div>

    
    </>
  )
}
export default Bottomcard;