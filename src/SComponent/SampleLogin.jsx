import { useEffect, useState } from "react"
import { auth } from "./FireBaseAuth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";


export function LoginComponents(){

    
     const  [authDetail,setAuthDetails]   = useState(null);
    const [credentails, setCredentials]  =  useState({email:"",password:""});

    // useEffect(()=>{listen()},[credentails])
// const listen= onAuthStateChanged(auth,(user) =>{
//     if(user){
//         setAuthDetails(user)
//     }
//     else{
//         setAuthDetails(null)
//     }
// }); 
 const handleSignOut = ()=> {
    signOut(auth).then(()=>{
        console.log("signOut success")
    }).catch((error)=>{console.log(error)})
 }

    function handleLogin(){
        signInWithEmailAndPassword(auth, credentails.email,credentails.password)
        .then((res)=>{console.log(res)})
        .catch((error)=>{
            console.log(error)
        })
console.log(credentails);
   

}
    
    function handleSignUp(){

        createUserWithEmailAndPassword(auth, credentails.email,credentails.password)
        .then((res)=>{console.log(res)})
        .catch((error)=>{console.log(error)})
    }

    return (
<>
<div>
    <br />
 <h1>Login here</h1>
    <br />

    <input type="Email" placeholder="Email" onChange={(e)=>{setCredentials({...credentails,email:e.target.value})}} /><br />
    <input type="password" placeholder="Password" onChange={(e)=>{setCredentials({...credentails,password:e.target.value})}}/><br />
    <button onClick={handleLogin}>Submit</button>

    <div>
        <br />
        <h1>SignUp</h1>
    <input type="email" placeholder="Email" onChange={(e)=>{setCredentials({...credentails,email:e.target.value})}} /><br />
    <input type="password" placeholder="Password" onChange={(e)=>{setCredentials({...credentails,password:e.target.value})}} /><br />
    <button onClick={handleSignUp}>Submit</button>
    </div>

    
      { authDetail ? <div><h2>SignedIn</h2> <button onClick={handleSignOut}>SignOut</button></div> : <h2>SignedOut</h2> }
    

</div>
</>

    )}
