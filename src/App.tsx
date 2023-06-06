import React from 'react';
import Modal from 'react-modal';
import { RouterProvider } from 'react-router-dom';

import { router } from '@routes';

Modal.setAppElement('#root');

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
