/* eslint-disable no-console */
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import React, { useState } from 'react';
import './App.css';
import firebase from './firebase/firebase';

interface UserLogin {
  email: string;
  password: string;
}
function LoginForm() {
  const [credentials, setCredentials] = useState<UserLogin>({
    email: '',
    password: '',
  });
  const onCredentialsChanged = ({
    currentTarget,
  }: {
    currentTarget: HTMLInputElement;
  }) => {
    setCredentials((prevValue) => ({
      ...prevValue,
      [currentTarget.name]: currentTarget.value,
    }));
  };

  const login = () => {
    signInWithEmailAndPassword(
      firebase.auth,
      credentials.email,
      credentials.password,
    )
      .then((userCredential: UserCredential) => {
        const { user } = userCredential;
        console.log(`signed in user`);
        console.log(user);
      })
      .catch((error) => {
        // TODO: use toastify here
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div className="login-body">
      <div className="login-body__form">
        <h1>Sign In</h1>
        <div className="login-body__input mb-16">
          <input
            type="text"
            name="email"
            placeholder="Email or phone number"
            onChange={onCredentialsChanged}
          />
        </div>
        <div className="login-body__input">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onCredentialsChanged}
          />
        </div>
        <button
          type="button"
          className="login-body__submit-btn"
          onClick={login}
        >
          Sign In
        </button>
        <div className="login-body__options">
          <span>Remember me</span>
          <span className="login-body__need-help">Need help?</span>
        </div>
        <div className="login-body__footer">
          <div className="login-body__fb">
            <img
              src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
              alt="fb"
            />
            <span>Login with Facebook</span>
          </div>
          <div className="login-body__new-to-nl">
            <span>New to Netflix ?</span>
            <span className="login-body__sign-up">Sign up now.</span>
          </div>
          <div className="login-body__google_captcha">
            This page is protected by Google reCAPTCHA to ensure youre not a
            bot.
            <span className="login-body__learn-more">Learn more.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
