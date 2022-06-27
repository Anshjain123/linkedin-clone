import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Feed from './Components/Feed';
import { useSelector } from 'react-redux';
import { login, selectuser, logout } from './features/userSlice';
import Login from './Components/Login';
import { auth, db } from './Components/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import Widgets from './Components/Widgets';
 

function App() {

    const user = useSelector(selectuser);

    const dispatch = useDispatch(); 


    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(login({
            email:user.email,
            uid:user.uid,  
          }))
        }else{
          dispatch(logout()); 
        }
      })
    }, [])


    return (
      <div className="App">
        {user && <Header />}
        <div className="app__body" style={{ height: (!user ? '100%' : 'auto') }}>
          {!user ? <Login /> :
            (
              <>
                <SideBar />
                <Feed />
                <Widgets />
              </>
            )}
        </div>
      </div>
    );
  }

export default App;
