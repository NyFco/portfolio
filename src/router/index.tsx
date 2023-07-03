import { createBrowserRouter } from 'react-router-dom';

import { Header } from '../components';

import paths from './paths';

const router = createBrowserRouter(
  paths.map((path) => ({
    path: path.path,
    element: (
      <>
        <Header />
        {path.page}
      </>
    ),
  }))
);

export default router;
