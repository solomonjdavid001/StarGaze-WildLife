import React from 'react';
import './SignForm.css';

function SignForm() {
  return (
    <div className='cover'>
      <h1>Login</h1>
      <input type="text" placeholder='username'/>
      <input type="password" placeholder='password'/>
    </div>
  );
}

export default SignForm;