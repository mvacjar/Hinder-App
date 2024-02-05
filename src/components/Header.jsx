import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiMiniHeart } from 'react-icons/hi2';
import { MdOutlineExitToApp } from 'react-icons/md';
import { ContextProvider } from '../context/context';
import logo from '../assets/hinderlogo.png';

export default function Header() {
  const { loggedInUser, setLoggedInUser, matches } =
    useContext(ContextProvider);
  const navigate = useNavigate();

  const ICONSIZE = 35;
  let MATCHCOUNT = matches.length;

  const handleLogOut = () => {
    setLoggedInUser(null);
    navigate('/');
  };

  return (
    <div
      className={`
      sticky
      top-0
      z-50	
      flex 
      flex-row
      flex-end
      justify-between
      items-center
      align-middle
      w-screen 
      p-2 h-14
      pt-2 
      shadow-lg
      text-black 
      text-xl
      capitalize
      font-bold
       bg-indigo-200
      
      `}
    >
      <div className='flex gap-2 items-center'>
        <div
          className='header-icon bg-gray-400 font-bold h-12 w-12 rounded-full mx-1'
          style={{
            backgroundImage: `url(${loggedInUser?.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className='pt-1'>{loggedInUser.name}</div>
      </div>

      <Link
        to='/mainpage'
        className='flex flex-row font-bold ml-32 hover:scale-105 transition ease-in-out duration-500'
      >
        <img className='w-40 h-full object-cover' src={logo} alt='' />
      </Link>

      <div className='self-end flex flex-row'>
        <div className=' header-icon text-2xl flex justify-center items-end w-20 mr-2'>
          <Link to='/matches'>
            <HeaderIcon
              icon={
                <HiMiniHeart
                  size={ICONSIZE}
                  className={`${
                    MATCHCOUNT
                      ? 'text-rose-700 hover:text-rose-500'
                      : 'text-black hover:text-gray-200'
                  } hover:scale-110 transition ease-in-out duration-500`}
                />
              }
            />
          </Link>
          <div
            className={`text-xl mb-0.5 mr-1 ${
              MATCHCOUNT ? 'text-rose-500' : 'text-black'
            }`}
          >
            {MATCHCOUNT}
          </div>
        </div>
        <div onClick={handleLogOut}>
          <HeaderIcon
            icon={
              <MdOutlineExitToApp
                size={ICONSIZE}
                className='black hover:text-gray-200 transition ease-in-out duration-500'
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

const HeaderIcon = ({ icon }) => {
  return <div className='header-icon pt-2'>{icon}</div>;
};
