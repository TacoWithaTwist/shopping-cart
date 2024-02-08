import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import ErrorPage from './ErrorPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/Shop',
      element: <Shop />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
