import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActionTypes } from '../store/auth/authReducer';


const Header = () => {

  const dispatch = useDispatch();

  const isAuthorized = useSelector((state)=> state.auth.isAuthorized);
  console.log("HEADER", isAuthorized);

  const logoutHandler = ()=>{
    dispatch({type: authActionTypes.LOG_OUT})
  }
  
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      { isAuthorized && (
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
     )}
    </header>
  );
};

export default Header;
