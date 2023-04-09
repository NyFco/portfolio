import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';

import App from './App';
import { English } from './lang';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IntlProvider locale="en" messages={English}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
