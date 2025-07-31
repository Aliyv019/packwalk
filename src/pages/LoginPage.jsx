import React from 'react'
import  { useNavigate } from 'react-router-dom';
export default function LoginPage() {
  const navigate = useNavigate();
  function formSubmit(e) {
      e.preventDefault();
      if(e.target.username.value === 'admin' && e.target.password.value === 'admin') {
          navigate('/home');
      } else {
          alert('Login Failed');
      }
  }
  return (
    <div className='flex justify-center h-screen flex-col items-center'>
      <p className='text-black'>Please Login</p>
        <form className=' center flex flex-col' onSubmit={formSubmit}>
            <input className='input' id='username' type="text" placeholder='Username' />
            <input className='input' id='password' type="password" placeholder='Password' />
            <button type='submit' className='button'>Login</button>
        </form>
    </div>
  )
}