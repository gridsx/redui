import React, { FC } from 'react';
import 'antd/dist/reset.css';
import './App.css';
import SearchBox from './components/search/Index';

const App: FC = () => (
  <div className="App">
    <SearchBox  SearchWord='xxx'/>
  </div>
);

export default App;