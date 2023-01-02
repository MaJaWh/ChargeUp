import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React } from 'react';
import '../styles/App.css';
import Dashboard from '../components/dashboard';
import LandingPage from './LandingPage';
import SignUp from './userAccounts/signUp.jsx';
import UserAccount from './userAccounts/User Account/UserAccount';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userAccount" element={<UserAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
