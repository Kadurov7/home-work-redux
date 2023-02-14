import classes from './Counter.module.css';
import { calculatorActionTypes } from '../store/calculator/calculatorReducer';
import { useDispatch, useSelector } from 'react-redux';


const Calculator = () => {
 
  const result = useSelector((state)=> state.calculator.result)
  const dispatch = useDispatch()
  
  console.log(result,"RESULT")

  const addHandler = ()=>{
       dispatch({ type:calculatorActionTypes.ADD, payload: 5})
  }
  const subtractHandler = ()=>{
    dispatch({ type:calculatorActionTypes.SUBTRACT, payload: 10})
    
  }
  const multiplyHandler = ()=>{
    dispatch({ type:calculatorActionTypes.MULTIPLY, payload: 2})
    
  }
  const divideHandler = ()=>{
    dispatch({ type:calculatorActionTypes.DIVIDE, payload: 4})

  }
    
 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+5 </button>
      <button onClick={subtractHandler}> -10</button>
      <button onClick={multiplyHandler}> *2</button>
      <button onClick={divideHandler}> /4</button>
      
    </main>
  );
};

export default Calculator;
