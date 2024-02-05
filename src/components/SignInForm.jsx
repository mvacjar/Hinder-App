import loginImg from '../assets/login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useContext } from 'react';
import { ContextProvider } from '../context/context';
import logo from '../assets/hinderlogo.png';

export default function SignInForm() {
  const { setLoggedInUser } = useContext(ContextProvider);
  const usernameBox = useRef();
  const passwordBox = useRef();
  const navigate = useNavigate();

  function handleLogIn(username, password) {
    const users = JSON.parse(localStorage.getItem('users'));
    const foundUserIndex = users.findIndex((u) => {
      return u.username === username;
    });

    if (
      users[foundUserIndex] &&
      users[foundUserIndex].username === username &&
      users[foundUserIndex].password === password
    ) {
      setLoggedInUser(users[foundUserIndex]);
      navigate('/mainpage');
      return true;
    } else {
      console.log('No user found');
    }
  }

  return (
    <div className='max-h-[100vh] grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block overflow-hidden'>
        <img className='object-cover' src={loginImg} alt='' />
      </div>
      <div className='flex flex-col justify-center'>
        <form className=' max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg  text-center'>
          <img src={logo}></img>
          <div className=' mt-10 flex flex-col py-2 text-black'>
            <label>Username</label>
            <input
              className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none'
              type='text'
              ref={usernameBox}
            />
          </div>
          <div className=' flex flex-col py-2 text-black'>
            <label>Password</label>
            <input
              className='p-2 rounded-lg bg-gray-200 mt-2  focus:border-violet-800 focus:bg-purple-200 focus:outline-none'
              type='password'
              ref={passwordBox}
            />
          </div>
          <div className='flex justify-between py-2'>
            <p className='flex items-center'>
              <input className='mr-2' type='checkbox' />
              Remember me
            </p>
            <p>Forgot password</p>
          </div>
          <button
            onClick={() =>
              handleLogIn(
                usernameBox.current.value,
                passwordBox.current.value
              )
            }
            className='w-full my-5 py-2 bg-pink-500 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/30 text-white font-semibold rounded-lg hover:bg-pink-400'
          >
            SIGN IN
          </button>
          <p>
            No member?{' '}
            <Link to='/signup' className=' font-bold'>
              Register!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
