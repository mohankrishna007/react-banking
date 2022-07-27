import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import TransactionHistory from './TransactionHistory';
import SendFunds from './SendFunds';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const routing = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='/transaction-history' element={<TransactionHistory/>}></Route>
      <Route path='/send-funds' element={<SendFunds/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='register' element={<Contact/>}></Route>

    </Routes>
  </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'))

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
