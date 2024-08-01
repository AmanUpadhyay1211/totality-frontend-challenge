"use client"
import { useRouter } from 'next/navigation';
import Navbar from './Navbar'; 

const Layout = ({ children }) => {
  const router = useRouter();
  const noLayoutRoutes = ['/signin', '/signup'];

  const shouldShowNavbar = !noLayoutRoutes.includes(router.pathname);

  return (
    <div>      {shouldShowNavbar && <Navbar />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;