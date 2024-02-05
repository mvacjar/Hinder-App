import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div className='h-[100vh] bg-gradient-to-r from-orange-500 to-pink-500'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
