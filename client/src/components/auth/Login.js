import React, { useState, useContext, useEffect, createRef } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
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
        <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-4 mt-5'>
          <div className='px-2 '>
            <form onSubmit={onSubmit}>
              <h1 className='text-black-50 text-center '>
                Account <span className='text-white'>Login</span>
              </h1>
              <div className='form-group'>
                <label className='text-white' htmlFor='email'>
                  Email Address:
                </label>
                <input
                  className='form-control'
                  type='text'
                  id='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label className='text-white' htmlFor='password'>
                  Password:
                </label>
                <div className='input-group'>
                  <input
                    ref={ref}
                    className='form-control'
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={onChange}
                    required
                  />
                  <span onClick={showHidePassword} className='input-group-text'>
                    <i className='fa fa-eye-slash'></i>
                  </span>
                </div>
              </div>
              <div className='form-group'>
                <button
                  type='submit'
                  //value='Login'
                  className='cust-btn btn btn-block'
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    //
    // </section>
  );
};

export default Login;
