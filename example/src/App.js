
import classes from './App.module.css';
import ProductData from './ProductData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className = {classes.Topbar}>
       <img src="https://i.dlpng.com/static/png/197684_preview.png" alt = "Amazon logo" />
     </nav>
      </header>
      <div className={classes.MainConatiner}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="product preview"></img>
        </div>
        <div className={classes.ProductData}></div>
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
           <div ></div>

        </div>
      </div>
    </div>
  );
}

export default App;
