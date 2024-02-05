export default function Carousel({ setActiveUser, carouselImages }) {
  if (!carouselImages) return null;
  return (
    <div className='m-8 relative overflow-auto min-h-[192px] bg-gradient-to-r from-orange-500 to-pink-500'>
      <div className='w-fit'>
        <div className='overflow-x-auto flex'>
          {carouselImages.map((user, index) => {
            return (
              <div
                key={index}
                className={`  w-56 h-76 m-3 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer `}
                onClick={() => {
                  setActiveUser(user);
                }}
              >
                <img
                  src={user?.image}
                  alt={`Picture ${user?.name}`}
                  className='w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105'
                />
                <div className='absolute inset-x-3 bottom-1'>
                  <p className='text-white font-semibold'>
                    {user?.name}
                  </p>
                </div>
                <div className='absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20'></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
