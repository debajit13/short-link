import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';

const RootLayout: React.FC = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
};

export default RootLayout;
