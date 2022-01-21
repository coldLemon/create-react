
import Login from '../apps/pages/login/index';

import BodyLayout from '../apps/layout/lay-body';
import Home from '../apps/pages/home';
import Map from '../apps/pages/map';
import Example from '../apps/pages/example/index.jsx';

const config = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <BodyLayout />,
    children: [
      {
        path: 'home',
        element: <Home />,
        index: 'index'
      },
      {
        path: 'map',
        element: <Map />,
      },
      {
        path:'test',
        element:<Example />,
      }
    ],
  },

]
export default config


