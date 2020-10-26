import { on } from 'nodemon';
import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
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
      console.log('Register submit');
    }
  };
  return (
    <section className='min-vh-100'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto  form p-4 mt-5'>
            <div className='px-2 '>
              <form>
                <h1 className='text-black-50 text-center'>
                  Account <span className='text-success'>Register</span>
                </h1>
                <div className='form-group'>
                  <label htmlFor='name'>Your Name:</label>
                  <input
                    className='form-control'
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Enter your name'
                    value={name}
                    onChange={onChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Your Email:</label>
                  <input
                    className='form-control'
                    type='text'
                    id='email'
                    name='email'
                    placeholder='Eenter Your email'
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Password'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Confirm Password'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='submit'
                    onSubmit={onSubmit}
                    value='Register'
                    className='btn btn-success btn-block'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
