import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <footer>All Rights Reserved &copy; Adarsh And Sunil</footer>
    </div>
  );
};

export default Layout;