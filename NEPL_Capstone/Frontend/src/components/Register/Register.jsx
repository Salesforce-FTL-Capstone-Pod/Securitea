import React from 'react'
import { Link } from "react-router-dom"
import { useRegistrationForm } from '../../hooks/useRegistrationForm'
import "./Register.css"

function Register() {
  const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } = useRegistrationForm()
  
  return (
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
      </div>
    </div>
  </div>
  )
}

export default Register