import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React } from 'react';
import '../styles/App.css';
import Dashboard from '../components/dashboard';
import LandingPage from './LandingPage';
import SignUp from './userAccounts/signUp.jsx';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
