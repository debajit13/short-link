import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import About from '../pages/About';
import Home from '../pages/Home';
import ErrorPage from '../layouts/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
