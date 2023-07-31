
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getProduct } from './Redux/Actions/ProductAction';
import Products from './Components/Products';
import { useEffect } from 'react';
import DummyComponent from './Components/DummyComponent';
import { Routes , Route, Link } from 'react-router-dom';
function App() {
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   const storageKeys = Object.keys(localStorage);
  //   if (storageKeys.length === 0){
  //     dispatch(getProduct())
  //     console.log("called")
  //   }
  // },[])
  // useEffect(()=>{

  //       dispatch(getProduct())
  //       console.log("called")
      
  //   },[])

  return (
    <div className="App">
      <h5>App Comp</h5>
      <br/>
      <Link to="/Products">Products</Link>
      <br/>
      <Link to="/Dummy">Dummy</Link>
     {/* <button onClick={()=>{dispatch(getProduct())}}>Get Products</button> */}
     <hr />
     <Routes>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Dummy" element={<DummyComponent/>}/>
     </Routes>

     {/* <Products/>
     <DummyComponent/> */}
    </div>
  );
}
export default App;
