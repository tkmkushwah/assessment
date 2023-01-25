import React from 'react';
import './App.css';
import './styles/sidebar.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;