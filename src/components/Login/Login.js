import React, { useState } from "react";
import SignUp from "../SignUp/SignUp";
import "./Login.css";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <button onClick={() => setSignIn(true)} className="login__button">
          Sign In
        </button>

        <div className="login__gradient" />
      </div>

      <div className="login__body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anywhere, Cancel at any time.</h2>
            <h3>
              Ready to Watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
