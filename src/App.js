import './App.css';
import Login from './SComponent/Login';
import { LoginComponents } from './SComponent/SampleLogin';
import { LoginLandingPage } from './SComponent/Shaad';
import { RoutingComp } from './SComponent/Routes';
import HomeComp from './SComponent/Home';
import { auth } from './SComponent/FireBaseAuth';
import {Route,Routes,Router} from 'react-router-dom';
import React, { useEffect, useState } from "react";

function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(userName);
      } else setUserName("");
    });
  }, [userName]);

  return (
    <div className="App">
     
        <Routes>
          <Route path="/" element={<LoginLandingPage />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/home" element={<HomeComp name={userName} />} />
        </Routes>
     
    </div>
  );
}
export default App;


  {/* <Login/> */}
{/* <LoginComponents/> */}
{/*  */}
{/* <RoutingComp/> */}