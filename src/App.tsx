import React, { FC } from 'react';
import 'antd/dist/reset.css';
import './App.css';
import SearchBox from './components/search/Index';

const App: FC = () => (
  <div className="App" style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={{ width: '300px' }}>
      <SearchBox SearchWord='xxx' />
    </div>
    <div style={{ backgroundColor: '#eef', flexGrow: 1 }}>
    </div>
  </div>
);

export default App;