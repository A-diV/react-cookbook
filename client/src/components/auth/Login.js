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
        <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4 mt-5'>
          <div className='px-2 '>
            <form action=''>
              <h1 className='text-black-50'>
                Account <span className='text-success'>Login</span>
              </h1>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Email'
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
                  type='submit'
                  onSubmit={onSubmit}
                  value='Login'
                  className='btn btn-success btn-block'
                />
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
