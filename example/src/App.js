import React, { Component } from 'react';
import classes from './App.module.css';
import ProductData from './Utills/ProductData';

import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar';

class App extends Component {
  state = {
    productData:ProductData,
    currentPreviewImage:'https://imgur.com/xSIK4M8.png',
    showHeartBeatSection:true,
  }
onColorOptionClick = (pos) => {
  const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
  console.log(updatedPreviewImage)
  this.setState({currentPreviewImage:updatedPreviewImage})
}

  render() {
    return (
      <div className="App">
        <Topbar />

        <div className={classes.MainConatiner}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.currentPreviewImage}
            showHeartBeatSection={this.state.showHeartBeatSection}/>
          </div>

          <div className={classes.ProductData}>
            <ProductDetails  data={this.state.productData} onColorOptionClick=
            {this.onColorOptionClick}/>

          </div>
        </div>
      </div>

    );
  }
}

export default App;
