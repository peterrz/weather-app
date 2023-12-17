import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/home';
import History from './pages/history';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-container">
          <Routes>

              <Route path="/history" element={<History />} />
              <Route path="/" element={<HomeScreen />}>
            </Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
