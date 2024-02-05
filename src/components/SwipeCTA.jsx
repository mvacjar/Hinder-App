import { useState, useContext } from 'react';
import { ContextProvider } from '../context/context';
import useFindUserIndex from '../hooks/useFindUserIndex';
import useGetMatches from '../hooks/useGetMatches';

export default function SwipeCTA({
  activeUser,
  removeCarouselImage,
}) {
  const [animation, setAnimation] = useState('');
  const { loggedInUser, setMatches } = useContext(ContextProvider);

  const handleAnimate = (state) => {
    setAnimation(state);
    setTimeout(() => {
      setAnimation(null);
    }, 600);
  };

  const handleLike = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentlyLoggedInUserIndex = useFindUserIndex(
      loggedInUser.username
    );
    users[currentlyLoggedInUserIndex].liked.push(activeUser.username);
    localStorage.setItem('users', JSON.stringify(users));

    const tempMatches = useGetMatches(loggedInUser.username);
    setMatches(tempMatches);
  };

  return (
    <div className=' rounded-lg bg-white min-h-[30rem] ml-auto mr-auto w-[95vw] text-[.8rem] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 max-w-[60rem] shadow-xl p-5'>
      <div
        className={` overflow-hidden relative h-auto w-[100%] md:h-[100%] md:w-auto rounded-lg flex-1 flex justify-center items-center gap-10`}
      >
        <button
          onClick={() => {
            handleAnimate('disliked');
            removeCarouselImage(activeUser);
          }}
          className=' text-red absolute bottom-10 hover:before:bg-redborder-red-500 h-16 w-16 rounded-full overflow-hidden border  bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full mr-[10rem]'
        >
          <span className='relative z-10 text-[2rem] grid m-auto'>
            💔
          </span>
        </button>

        <button
          onClick={() => {
            handleAnimate('liked');
            removeCarouselImage(activeUser);
            handleLike();
          }}
          className='text-red absolute bottom-10 h-16 w-16 rounded-full overflow-hidden border border-green-500 bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full ml-[10rem]'
        >
          <span className='relative z-10 text-[2rem] grid m-auto'>
            ❤️‍🔥
          </span>
        </button>
        {activeUser ? (
          <img
            className={`object-cover block m-auto w-[100%] h-[100%] rounded-t-lg md:rounded-none md:rounded-s-lg  delay-75
    ${
      animation === 'liked'
        ? 'transition-translate duration-200  translate-x-[100%]'
        : ''
    }
    ${
      animation == 'disliked'
        ? 'transition-translate duration-200  translate-x-[-100%]'
        : ''
    }
  `}
            src={activeUser.image}
            alt=''
          />
        ) : (
          <div>NO USERS TO SWIPE ON!</div>
        )}
      </div>
      <div className='flex flex-col flex-colleading-normal flex-1 p-5 justify-center'>
        <h5 className='  text-4xl capitalize font-bold tracking-tight mb-10 text-gray-900 text-center '>
          {activeUser?.name}
        </h5>

        <div className=' text-xl  text-gray-600 text-start '>
          {activeUser?.description}
        </div>
      </div>
    </div>
  );
}
