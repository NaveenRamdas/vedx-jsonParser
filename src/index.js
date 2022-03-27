import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DisplayTable from './Components/DisplayTable'
import SearchApp from './Components/searchData'
import Table from './Components/searchData'


function data(){
  fetch("https://my-json-server.typicode.com/Ved-X/assignment/orders").then(
      (response) => response.json()
  ).then((data) => {      
      return data
  })
}

ReactDOM.render(
  // <SearchApp data={data()} />,
  <DisplayTable />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
