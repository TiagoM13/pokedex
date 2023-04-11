import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './routes/route_app';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
