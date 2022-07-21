import React from 'react'
import { Link } from "react-router-dom"
import { useLoginForm } from "../../hooks/useLoginForm"
import "./Login.css"

function Login() {
  const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } = useLoginForm()

  return (
   <div className="Login">
      <div className="card">
        <h2>Login</h2>


        <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>


          <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
            {isProcessing ? "Loading..." : "Login"}
          </button>
        </div>

        <div className="footer">
          <p>
            No account? Register <Link to="/register">here.</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login