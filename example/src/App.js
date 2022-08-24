
import classes from './App.module.css';

import ProductDetails from './ProductDetails';
import ProductPreview from './ProductPreview';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <nav className = {classes.Topbar}>
       <img src="https://i.dlpng.com/static/png/197684_preview.png" alt = "" />
     </nav>
      </header>
      <div className={classes.MainConatiner}>
        <div className={classes.ProductPreview}>
        <ProductPreview/>
          </div>
        
        <div className={classes.ProductData}>
          <ProductDetails/>
        
        </div>
      </div>
      </div>
    
  );
}

export default App;
