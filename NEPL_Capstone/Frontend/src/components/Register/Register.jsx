import React from 'react'
import { Link } from "react-router-dom"
import { useRegistrationForm } from '../../hooks/useRegistrationForm'
import "./Register.css"
import SampleLogo from "../../assets/SampleLogo.svg"
import Logo from "../../assets/Logo.svg"


//MUI Components
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function Register() {
  const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } = useRegistrationForm()
  
  return (
    <div className="Register">
        <img src={SampleLogo}></img>
    <h2 className='Header'>Happy Day of the Week!</h2>
  </div>
  )
}

export default Register

/*
    <div className="Register">
    <div className="card">
      <h2>Register</h2>

      {errors.form && <span className="error">{errors.form}</span>}
      <br />

      <div className="form">
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter a valid email"
            value={form.email}
            onChange={handleOnInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="split-input-field">
          <div className="input-field">
          <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={form.first_name}
              onChange={handleOnInputChange}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={form.last_name}
              onChange={handleOnInputChange}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleOnInputChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="input-field">
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm password"
            value={form.passwordConfirm}
            onChange={handleOnInputChange}
          />
          {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
        </div>

        <div className="input-field">
          <label htmlFor="birthday">Enter your birthday</label>
          <input
            type="birthday"
            name="birthday"
            placeholder="MM/DD/YYYY"
            value={form.birthday}
            onChange={handleOnInputChange}
          />
        </div>



        <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
          {isProcessing ? "Loading..." : "Create Account"}
        </button>
      </div>

      <div className="footer">
        <p>
          Have an account? Login <Link to="/login">here</Link>
        </p>

                  <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          
      </div>
    </div>
  </div>*/