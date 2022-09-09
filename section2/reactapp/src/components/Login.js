import React from 'react'
import './Login.css';
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';


const Login = () => {
  // 1  create a submit function

  const loginSubmit = (formdata,{resetForm}) => {
    console.log(formdata);
    resetForm();

  }
  //  2 locate form tag and use formik
  return (
  <div>
    <div  className='log' >
     
      <Formik initialValues={{email:'', password:''}} onSubmit={loginSubmit}>

        { ({values,handleSubmit,handleChange})=> (
                <form  onSubmit={handleSubmit}>
                <h3> Login... </h3>
          <div className="form-outline mb-4">
            <input type="email" id="email" value={values.email} onChange={handleChange} className="form-control" />
            <label className="form-label" for="form2Example1">Email address</label>
          </div>
         
          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input type="password" id="password" value={values.password}  onChange={handleChange} className="form-control" />
            <label className="form-label" for="form2Example2">Password</label>
          </div>
        
          {/* <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example34"  />
                <label className="form-check-label" for="form2Example34"> Remember me </label>
              </div>
            </div>
        
            <div className="col">
              {/* <!-- Simple link --> */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>
        
          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
        
          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>Not a member? 
              <NavLink to="/Register">Register</NavLink></p>
              

            <p>or sign up with:</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>
        
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>
        
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>
        
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
        

  )}
      </Formik>
  

</div>
</div>
  )}

export default Login;
