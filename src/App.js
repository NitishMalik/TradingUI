import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Template from './common/Template';

import OrderContainer from './components/OrderContainer';

function App() {
  return (
    <div className="App">
      <Template>
      <OrderContainer />
      </Template>
    </div>
  );
}

export default App;
