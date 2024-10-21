import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PredictForm from './components/PredictForm';
import VerificationResult from './components/VerificationResult';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login setUserData={setUserData} />} />
        <Route 
          path="/verificar" 
          element={userData ? <PredictForm userData={userData} /> : <Navigate to="/" />} 
        />
        <Route path="/resultado" element={<VerificationResult />} />
      </Routes>
    </Router>
  );
}

export default App;
