import React  from "react";

import classes from './ProductDetails.module.css'
import ProductData  from "./ProductData";

 const ProductDetails = () => {

    return(
        <div className={classes.ProductData}>
        <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
        <p className={classes.ProductDescription}>{ProductData.description}</p>
        <h3 className={classes.SectionHeading}>Select Color</h3>
        <div>
          <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')}
           src="https://imgur.com/PTgQlim.png"  alt="Red Colored watch"></img>
          <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" 
          alt="Blue Colored watch"></img>
          <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" 
          alt="purple Colored watch"></img>
           <img className={classes.ProductImage} src="https://imgur.com/iOeUBV7.png" 
          alt="purple Colored watch"></img>
           <h3 className={classes.SectionHeading}>Features</h3>
           <div >
            <button className={classes.FeatureItem
            }>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
           </div>
           <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
        </div>

    )

 }

 export default ProductDetails;