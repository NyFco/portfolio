import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './style/Theme';
import router from './router';

import './style/global.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
