import * as React from 'react';
import ReactDOM from 'react-dom/client';

import Layout from './Layout';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
);
