import React, { useEffect, useState } from 'react'
import './App.css';
import HomeScreen from "./screens/HomeScreen"
import {
  BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from './features/counter/userSlice';
import ProfileScreen from "./screens/ProfileScreen"


function App() {
 // const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

useEffect(() => {
 auth.onAuthStateChanged((userAuth) => {
    if(userAuth) {
      //logged in
      console.log('myname',userAuth)
      dispatch(
        login({
        uid: userAuth.uid,
        email: userAuth.email
      })
      );
       setUser({
         uid: userAuth.uid,
         email: userAuth.email
       })
      console.log('elisha',user)
    } else {
      //logged out
      dispatch(logout())
      setUser(null)
    }
  });
  
}, [dispatch]);

console.log('>>',user)
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen/>
        ):(
          <Switch>
             <Route path="/home">
            <HomeScreen/>
          </Route>
            <Route path='/profile'>
              <ProfileScreen/>
            </Route>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
        </Switch>
        )}
       
      </Router>
    </div>
  );
}

export default App;
