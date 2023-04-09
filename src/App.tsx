import { ThemeProvider } from 'styled-components';

import theme from './style/Theme';
import { MainPage } from './pages';

import './style/global.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
