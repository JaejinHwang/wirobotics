import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Vision from './pages/Vision';
import Allex from './pages/Allex';
import Careers from './pages/Careers';
import CareerDetail from './pages/CareerDetail';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/vision" replace />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/allex" element={<Allex />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/career/:slug" element={<CareerDetail />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
