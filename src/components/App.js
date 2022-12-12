import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/App.css';
import Dashboard from '../components/dashboard';
import Login from '../components/Login';
import Map from '../components/Map';
import Prefrences from '../components/prefrences';
import useToken from '../customhooks/useToken';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/prefrences" element={<Prefrences />} />
          <Route path="/Map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
