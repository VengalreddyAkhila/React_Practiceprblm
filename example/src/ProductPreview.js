import React from 'react';

import classes from './ProductPreview.module.css'
const ProductPreview = (props) => {

  const curentHour = new Date().getHours() > 9  ? new Date().getHours() : '0' +
  new Date().getHours();
  const curentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' +
  new Date().getMinutes();

    return(

        <div className={classes.ProductPreview}>
             <img src="https://imgur.com/iOeUBV7.png" alt="product preview"/>
          
          
                    <div className={classes.TimeSection}>
                      <p>{`${curentHour}:${curentMinute}`}</p>
                    </div>
                   
                    
          
                    {/* <div className={classes.HeartBeatSection}>
                    <i class="fas fa-heartbeat"></i>
                      <p>78</p>
                    </div> */}
        </div>
    )

}

export default ProductPreview;