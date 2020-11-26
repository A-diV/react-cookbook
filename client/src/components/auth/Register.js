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

  const [value, setvalue] = useState('Show Password');

  const showHidePassword = (e) => {
    e.preventDefault();

    if (e.target.className === 'fas fa-square') {
      e.target.className = '';
      ref.current.type = 'text';
      e.target.className = 'fas fa-check-square';
      setvalue('Hide Password');
    } else {
      ref.current.type = 'password';
      e.target.className = 'fas fa-square';

      setvalue('Show Password');
    }
  };
  return (
    //<section className='min-vh-100'>
    <div className='container'>
      <div className='row'>
        <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto  form p-4 mt-5'>
          <div className='px-2 '>
            <form onSubmit={onSubmit}>
              <h1 className='text-black-50 text-center text-wrap'>
                Account <span className='text-white'>Register</span>
              </h1>
              <div className='form-group'>
                <label className='text-white' htmlFor='name'>
                  Your Name:
                </label>
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
                <label className='text-white' htmlFor='email'>
                  Your Email:
                </label>

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
                <label className='text-white' htmlFor='password'>
                  Create a Password:
                </label>
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
                  {/* <span onClick={showHidePassword} className='input-group-text'>
                    <i className='fa fa-eye-slash'></i>
                  </span> */}
                  {/* </div> */}
                </div>
                <small className='text-white-50 text-wrap'>
                  Your password should contain six or more characters
                </small>
                <br />
                <span>
                  <i onClick={showHidePassword} className='fas fa-square '></i>
                  <span className='text-white showPass pl-1'>{value}</span>
                </span>
              </div>
              <div className='form-group'>
                <label className='text-white' htmlFor='password2'>
                  Confirm Password:
                </label>
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
                  className=' cust-btn btn btn-block'
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
