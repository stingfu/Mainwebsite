import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTheme } from './contexts/ThemeContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DipBotPage from './pages/DipBotPage';
import GridBotPage from './pages/GridBotPage';
import MomentumBotPage from './pages/MomentumBotPage';
import ArbitrageBotPage from './pages/ArbitrageBotPage';
import PlansPage from './pages/PlansPage';
import NewsPage from './pages/NewsPage';
import FAQPage from './pages/FAQPage';

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dip-bot" element={<DipBotPage />} />
          <Route path="/grid-bot" element={<GridBotPage />} />
          <Route path="/momentum-bot" element={<MomentumBotPage />} />
          <Route path="/arbitrage-bot" element={<ArbitrageBotPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;