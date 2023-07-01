import { ThemeProvider } from 'styled-components';

import theme from './style/Theme';
import { Header } from './components';
import { MainPage } from './pages';

import './style/global.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
