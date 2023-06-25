import React, { useState } from "react";
//import { signInWithPopup } from "firebase/auth";
import "./Login.css";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
 //import { auth, provider } from "../../firebase";

function Login() {

  // const handleSubmit = async () => {
  //   await signInWithPopup(auth, provider)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 

  //https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png



  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
        <h1>Quora</h1>
        </div>
        <div className="login__desc">
          <p>A Place to Share knowledge and better understand the world</p>
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              {/* onClick={handleSubmit} */}
              <p >Continue With Google</p>
            </div>
           
            <div className="login__authDesc">
              <p>
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Sign Up With Email
                </span>
                . By continuing you indicate that you have read and agree to
                Quora's
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Terms of Service{" "}
                </span>
                and{" "}
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>
          <div className="login__emailPass">
            <div className="login__label">
              <h4>Login</h4>
            </div>
            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="login__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login__forgButt">
              <small>Forgot Password?</small>
              {/* onClick={handleSubmit} */}
              <button >Login</button>
            </div>
            {/* onClick={handleSubmit} */}
            <button >Register</button>
          </div>
        </div>
        <div className="login__lang">
          <p>हिन्दी</p>
          {/* <ArrowForwardIosIcon fontSize="small" /> */}
        </div>
        <div className="login__footer">
          <p>About</p>
          <p>Languages</p>
          <p>Careers</p>
          <p>Businesses</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>&copy; Quora Fake Inc. 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Login;