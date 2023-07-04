import { RouterProvider } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'styled-components';

import theme from './style/Theme';
import router from './router';

import './style/global.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
