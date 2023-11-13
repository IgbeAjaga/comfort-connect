// App.js
import React from 'react';
import Header from './components/Header';
import EditProfile from './components/EditProfile';
import Logout from './components/Logout';
import Sidebar from './components/Sidebar';
import RecommendedPosts from './components/RecommendedPosts';
import ConnectlovedOne from './components/ConnectlovedOne';
import ConnectionStatus from './components/ConnectionStatus';
import ConnectionRemove from './components/ConnectionRemove';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
      <div className="App">
        <Header />
        <div className='app_page'>
          <Sidebar>
            <Routes>
              <Route path="/" element={<RecommendedPosts />} />
              <Route path="/add-new" element={<ConnectlovedOne />} />
              <Route path="/remove-connection" element={<ConnectionRemove />} />
              <Route path="/connection-status" element={<ConnectionStatus />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/Logout" element={<Logout />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/LoginPage" element={<LoginPage />} />
            </Routes>
            </Sidebar>
            </div>
      </div>    
  );
}

export default App;
