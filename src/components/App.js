import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React } from "react";
import "../styles/App.css";
import Dashboard from "../components/dashboard";
import Login from "../components/Login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
            exact
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
