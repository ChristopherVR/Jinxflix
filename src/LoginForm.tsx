import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import firebase from './firebase/firebase';

interface UserLogin {
  email: string;
  password: string;
}

function LoginForm() {
  const navigate = useNavigate();
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
        toast.success('Successfully logged user in!');
        navigate('/home');
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(`An error occured trying to log user in: ${errorMessage}`);
      });
  };

  return (
    <div className="login-body">
      <div className="form">
        <h1>Sign In</h1>
        <div className="mb-6">
          <input
            type="text"
            name="email"
            placeholder="Email or phone number"
            onChange={onCredentialsChanged}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onCredentialsChanged}
          />
        </div>
        <button type="button" className="submit-btn" onClick={login}>
          Sign In
        </button>
        <div className="login-body-options">
          <span>Remember me</span>
          <span className="login-body-need-help">Need help?</span>
        </div>
        <div className="footer">
          <div className="fb">
            <img src="/fb.png" alt="fb" />
            <span>Login with Facebook</span>
          </div>
          <div className="login-body-new-to-nl">
            <span>New to Netflix ?</span>
            <span className="login-body-sign-up">Sign up now.</span>
          </div>
          <div className="google-captcha">
            This page is protected by Google reCAPTCHA to ensure youre not a
            bot.
            <span className="learn-more">Learn more.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
