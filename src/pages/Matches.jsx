import { useContext } from 'react';
import { ContextProvider } from '../context/context';
import { Link } from 'react-router-dom';

function Matches() {
  const { matches } = useContext(ContextProvider);

  return (
    <div className='m-8 relative overflow-auto h-full w-full'>
      <Link to='/mainpage'>
        <button className='bg-indigo-200 m-4 hover:bg-pink-400 text-black  font-bold py-2 px-4 rounded'>
          GO BACK HOME
        </button>
      </Link>
      <div className='w-fit'>
        <div className='overflow-x-auto flex'>
          {matches.length > 0 ? (
            matches.map((user, index) => {
              return (
                <div
                  key={index}
                  className={`w-56 h-76 m-3 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer`}
                  onClick={() => {
                    handleImageClick(user);
                  }}
                >
                  <img
                    src={user.image}
                    alt={`Picture ${user.name}`}
                    className='w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105'
                  />
                  <div className='absolute inset-x-3 bottom-1'>
                    <p className='text-white font-semibold'>
                      {user.name}
                    </p>
                  </div>
                  <div className='absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20'></div>
                </div>
              );
            })
          ) : (
            <div>You don't have any matches yet! ❤️‍🔥</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Matches;
