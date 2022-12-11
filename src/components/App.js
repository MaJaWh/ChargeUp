import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/App.css';
import Dashboard from '../components/dashboard';
import Login from '../components/Login';
import Prefrences from '../components/prefrences';
import useToken from '../customhooks/useToken';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/prefrences" element={<Prefrences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
