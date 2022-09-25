/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
            Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
          font-weight: normal;
          width: 100%;
          margin: 0;
          color: #fff;
          background: #080624;
        }

        a {
          color: #fff;
          text-decoration: none;
        }

        h1 {
          font-size: 56px;
          line-height: 63px;
          font-weight: 700;
          margin: 0 0 24px;
        }

        h2 {
          font-size: 38px;
        }

        h3 {
          font-size: 37px;
          line-height: 44px;
        }

        h5 {
          font-size: 16px;
          font-weight: 500;
          color: #fff;
        }
      `}
    />

    <App />
  </React.StrictMode>,
);
