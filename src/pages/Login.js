import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { signInUser, signUpProvider } from '../auth/firebase';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    signInUser(email, password, navigate);
    console.log(email, password);
  }
  const handleGoogleProvider = ()=>{
    signUpProvider(navigate);
  }
  return (
    <div className="d-flex justify-content-center">
    <div className="form-image">
      <img src={"https://picsum.photos/800/800"} alt="sample-photo" />
    </div>
    <div className="register-form">
      <h1 className="form-title display-3">Login</h1>
      <form id="register" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email address.."
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password.."
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="btn btn-primary form-control">
          Login
        </button>
      </form>
      <button className='btn btn-primary form-control' onClick={handleGoogleProvider}>Continue with Google</button>
    </div>
  </div>
  )
}

export default Login;