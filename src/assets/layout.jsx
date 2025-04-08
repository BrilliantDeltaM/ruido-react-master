import Navbar from './navbar.jsx';
import Footer from './footer.js';
import { Outlet } from 'react-router-dom';


const Layout = () => {


  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
