import React from 'react';

import ReactDOM from 'react-dom/client';
// import './index.css';
// import Counter from './Counter';
// import Reveal from './Reveal';
// import Tasklist from './Lists';
// import StringVowels from './StringVowels';
// import ReactinterTask from './reactinterTask';
import App from './App';
// import Users from './Users';
// import EmployeesList from './Employee';
// import CountriesList from './Countries';
// import Remove from './Remove';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  {/* <Users/> */}
  {/* <ReactinterTask/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
