import { Link, useNavigate } from 'react-router-dom';
import { useRef, useContext } from 'react';
import { ContextProvider } from '../context/context';
import Webcam from 'react-webcam';
import logo from '../assets/hinderlogo.png';

export default function SignUpForm({ userImage, saveImage }) {
  const navigate = useNavigate();
  const { setNewUser } = useContext(ContextProvider);
  const name = useRef();
  const description = useRef();
  const password = useRef();
  const username = useRef();

  const validateRegistration = () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const usernameIsTaken = users.find(
      (user) => user?.username === username.current.value
    );

    if (
      username.current.value &&
      name.current.value &&
      description.current.value &&
      password.current.value &&
      userImage &&
      !usernameIsTaken
    ) {
      handleRegister();
      navigate('/mainpage');
    } else {
      alert(
        "Please fill in all fields or make sure the username isn't taken"
      );
    }
  };

  const handleRegister = () => {
    const newUser = {
      name: name.current.value,
      username: username.current.value,
      password: password.current.value,
      description: description.current.value,
      image: userImage,
      liked: [],
      disliked: [],
    };

    setNewUser(newUser);
  };

  const webcamRef = useRef(null);

  return (
    <div className=' flex flex-row bg-white  justify-center items-center rounded-lg '>
      <div>
        <img src={logo} alt='profil'></img>

        <div className=' flex flex-col items-center mt-6'>
          <Webcam
            className='rounded-[1rem] ml-6'
            height={300}
            width={300}
            audio={false}
            ref={webcamRef}
          ></Webcam>
          <div className='flex mt-4 flex-col-reverse '>
            <img className='rounded-[1rem] w-48 ' src={userImage} />
          </div>
          <button
            type='button'
            className='bg-pink-500 text-white px-5 py-2 my-5 rounded-lg font-bold'
            onClick={() => saveImage(webcamRef)}
          >
            Capture
          </button>
        </div>
      </div>
      <form className=' my-5 max-w-[800px] w-full mx-auto bg-white p-8 px-8 rounded-lg  text-center'>
        <div className=' flex flex-col items-center py-2 text-black'>
          <label>Name</label>
          <input
            className=' w-1/2  rounded-lg bg-gray-200 mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none'
            type='text'
            ref={name}
          />
        </div>
        <div className='items-center  flex flex-col py-2 text-black'>
          <label>Username</label>
          <input
            className='w-1/2 rounded-lg bg-gray-200 mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none'
            type='text'
            ref={username}
          />
        </div>
        <div className='items-center flex flex-col py-2 text-black'>
          <label>Password</label>
          <input
            className='w-1/2  p-2 rounded-lg bg-gray-200 mt-2  focus:border-violet-800 focus:bg-purple-200 focus:outline-none'
            type='password'
            ref={password}
          />
        </div>
        <div className=' items-center flex flex-col py-2 text-black'>
          <label>Description</label>
          <textarea
            className=' w-1/2  resize-none rounded-lg bg-gray-200 mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none'
            placeholder='Some words to describe yourself ...'
            type='text'
            ref={description}
          />
        </div>
        <div className='flex justify-between py-2'>
          <p className='flex items-center'>
            <input className='mr-2' type='checkbox' />
            Remember me
          </p>
          <Link to='#'>
            <p>Forgot password</p>
          </Link>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            validateRegistration();
          }}
          className='hover:bg-pink-400 w-full my-5 py-2 bg-pink-500 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/40 text-white font-semibold rounded-lg'
        >
          SIGN UP
        </button>
        <p>
          Already member?{' '}
          <Link to='/' className=' font-bold'>
            Click here!
          </Link>
        </p>
      </form>
    </div>
  );
}
