
import { SignUpComp } from "./SignUpModal";
import { LoginLandingPage } from "./Shaad";

import {Route,Routes} from 'react-router-dom';
import HomeComp from "./Home";


 const RoutingComp=()=>{

    <Routes>
        <Route path="/" element={<LoginLandingPage/>}/>
        <Route path="/home" element={<HomeComp/>}/>
      
    
    </Routes>
}
export {RoutingComp}
