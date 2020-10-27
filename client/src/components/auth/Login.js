import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Login submit');
  };
  return (
    //<section className='min-vh-100'>
    <div className='container'>
      <div className='row'>
        <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-4 mt-5'>
          <div className='px-2 '>
            <form onSubmit={onSubmit}>
              <h1 className='text-black-50 text-center '>
                Account <span className='text-success'>Login</span>
              </h1>
              <div className='form-group'>
                <label htmlFor='email'>Email Address:</label>
                <input
                  className='form-control'
                  type='text'
                  id='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input
                  className='form-control'
                  type='text'
                  id='password'
                  name='password'
                  placeholder='Password'
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <button
                  type='submit'
                  //value='Login'
                  className='btn btn-outline-success btn-block'
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    //</section>
  );
};

export default Login;
