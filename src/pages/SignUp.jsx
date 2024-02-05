import SignUpForm from '../components/SignUpForm';
import { useState } from 'react';

export default function SignUp() {
  const [userImage, setUserImage] = useState(null);

  const saveImage = (img) => {
    const imageSrc = img.current.getScreenshot();
    setUserImage(imageSrc);
  };

  return (
    <div className='grid grid-cols-1  h-full w-full  bg-gradient-to-r from-orange-500 to-pink-500'>
      <div className=' flex flex-col justify-center items-center'>
        <SignUpForm userImage={userImage} saveImage={saveImage} />
      </div>
    </div>
  );
}
