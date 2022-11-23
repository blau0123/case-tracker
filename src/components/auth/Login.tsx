import React from 'react';
import '../../App.scss';
import './Login.scss';

function Login() {
  return (
    <div id='login-container'>
      <section id='login-section'>
        <h1 className='login-title'>Login to view your case tasks</h1>
        <div id='login-input-container'>
          <input className='text-input' type='text' name='username' placeholder='Username' />
          <input className='text-input' type='password' name='password' placeholder='Password' />
        </div>
        <button className='cstrack-button primary' type='button'>Submit</button>
      </section>
      <section id='signup-init-section'>
        <h1 className='login-title'>New here?</h1>
        <p>Sign up to experience the best way to keep track of your case tasks</p>
        <button className='cstrack-button secondary' type='button'>Sign up</button>
      </section>
    </div>
  );
}

export default Login;