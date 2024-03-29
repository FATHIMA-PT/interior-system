import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MyContextProvider } from './Components/CONTEXT/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <MyContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </MyContextProvider>
  </React.StrictMode>
);



