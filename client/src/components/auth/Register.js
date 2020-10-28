//import { on } from 'nodemon';
import React, { useState, useContext, createRef, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };
  const ref = createRef();

  const showHidePassword = (e) => {
    e.preventDefault();
    if (e.target.className === 'fa fa-eye-slash') {
      e.target.className = '';
      ref.current.type = 'text';
      e.target.className = 'fa fa-eye';
    } else {
      ref.current.type = 'password';
      e.target.className = 'fa fa-eye-slash';
    }
  };
  return (
    //<section className='min-vh-100'>
    <div className='container'>
      <div className='row'>
        <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto  form p-4 mt-5'>
          <div className='px-2 '>
            <form onSubmit={onSubmit}>
              <h1 className='text-black-50 text-center'>
                Account <span className='text-success'>Register</span>
              </h1>
              <div className='form-group'>
                <label htmlFor='name'>Your Name:</label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  placeholder='Enter your name'
                  value={name}
                  onChange={onChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Your Email:</label>

                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  placeholder='Eenter Your email'
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Create a Password:</label>
                <div className='input-group'>
                  <input
                    ref={ref}
                    type='password'
                    className='form-control'
                    data-toggle='password'
                    id='password'
                    name='password'
                    placeholder='Type your Password'
                    value={password}
                    onChange={onChange}
                    required
                    minLength='6'
                  />
                  {/* <div className='input-group-append'> */}
                  <span onClick={showHidePassword} className='input-group-text'>
                    <i className='fa fa-eye-slash'></i>
                  </span>
                  {/* </div> */}
                </div>
                <small className='text-black-50'>
                  Your password should contain six characters minimum
                </small>
              </div>
              <div className='form-group'>
                <label htmlFor='password2'>Confirm Password:</label>
                <input
                  type='password'
                  className='form-control'
                  id='password2'
                  name='password2'
                  placeholder='Confirm your Password'
                  value={password2}
                  onChange={onChange}
                  required
                  minLength='6'
                />
              </div>
              <div className='form-group'>
                <button
                  type='submit'
                  //value='Register'
                  className='btn btn-outline-success btn-block'
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    //
    //</section>
  );
};
export default Register;
