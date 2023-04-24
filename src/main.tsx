import React from 'react';
import { IntlProvider } from 'react-intl';
import en from './localization/en.json';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App.tsx';
import Tutorials from './components/Tutorials/Tutorials';
import { mainReducer } from './reducers/main-reducer.ts';
import '@cloudscape-design/global-styles';
import './index.css';

type LocaleTranslations = {};
type messagesType = {
  'en': LocaleTranslations,
}
const messages: messagesType = {
  'en': en,
};
let browserLanguage: string = navigator.language.split(/[-_]/)[0];

function changeLanguage(lang: string) {
  browserLanguage = lang;
}

const store = createStore(mainReducer);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App changeLanguage={changeLanguage} language={browserLanguage} />,
    errorElement: null,
    children: [
      {
        path: '/tutorials',
        element: <Tutorials/>
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <IntlProvider messages={messages[browserLanguage]} locale={browserLanguage} defaultLocale="en">
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </IntlProvider>
)
