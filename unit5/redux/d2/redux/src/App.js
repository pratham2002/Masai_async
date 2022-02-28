import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { COUNT_DECREMENT, COUNT_INCREMENT } from './store/actionTypes';

function App() {
  let dispatch = useDispatch();
  const count = useSelector((state)=>state.count)
  return (
    <div className="App">
     <h1>{count}</h1>
     <button onClick={()=>{
       dispatch({
         type:COUNT_INCREMENT
       })
     }}>Increment</button>
     <button onClick={()=>{
       dispatch({
         type:COUNT_DECREMENT
       })
     }}>Decrement</button>
    </div>
  );
}

export default App;
