import { Outlet } from 'react-router-dom';
import AppNavbar from './AppHeader';

const RootLayout = () => {
  return (
    <>
      <AppNavbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
