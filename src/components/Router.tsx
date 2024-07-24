import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GetStarted from './GetStarted';
import Header from './Header';
import Login from './Login';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <GetStarted />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
  {
    path: '/home',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
]);

const NavigateRouter = () => {
  return <RouterProvider router={router} />;
};

export default NavigateRouter;
