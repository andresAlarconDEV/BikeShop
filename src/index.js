import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB2EzCZuMe9lNYIZhIkFYVL9nOsH0ClNgY",
  authDomain: "bikeshop-react.firebaseapp.com",
  projectId: "bikeshop-react",
  storageBucket: "bikeshop-react.appspot.com",
  messagingSenderId: "1004943211373",
  appId: "1:1004943211373:web:31b8c56b970da182f87864"
};

// Initialize Firebase
initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
