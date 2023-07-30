
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getProduct } from './Redux/Actions/ProductAction';
import Products from './Components/Products';
function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h5>App Comp</h5>
     <button onClick={()=>{dispatch(getProduct())}}>Get Products</button>
     <hr />
     <Products/>
    </div>
  );
}

export default App;
