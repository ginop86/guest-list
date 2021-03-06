import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/* 
This is the login form.
This is the "dumb" component that will get the information from the user and will use the methods from the parent component to check the input.
*/

const LoginForm = ({onSubmit, onChange, errors, successMessage, user}) => (
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading  white-text text-darken-2">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <label htmlFor="email" className="white-text">Email</label>
        <input
          name="email"
          onChange={onChange}
          value={user.email}
        />
        <p className="error-message">{errors.email}</p>
      </div>

      <div className="field-line">
        <label htmlFor="password" className="white-text">Password</label>
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={user.password}
        />
        <p className="error-message">{errors.password}</p>
      </div>

      <div className="button-line">
        <button type="submit" className="waves-effect waves-light blue darken-1 btn">Log In</button>
      </div>

      <p>Don't have an account? <Link to={'/signup'}>Create one</Link>.</p>
    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;