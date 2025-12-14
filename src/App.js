import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Vision from './pages/Vision';
import Allex from './pages/Allex';
import Careers from './pages/Careers';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/vision" replace />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/allex" element={<Allex />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
