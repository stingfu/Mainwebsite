import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Grid3X3, Settings, BarChart3 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const GridBotPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    pair: 'BTCUSDT',
    strategy: 'Increasing Sell/Increasing Buy (ISIB)',
    lowerLimit: '',
    upperLimit: '',
    investment: '',
    smallGrid: '',
    bigGrid: '',
    dipPercentage: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Submitting Grid Bot with:', formData);
  };

  const botTabs = [
    { name: 'Dip Bot', path: '/dip-bot', active: false },
    { name: 'Grid Bot', path: '/grid-bot', active: true },
    { name: 'Momentum Bot', path: '/momentum-bot', active: false },
    { name: 'Arbitrage Bot', path: '/arbitrage-bot', active: false }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Grid3X3 className="w-16 h-16 text-sky-400" />
          </div>
          <h1 className={`text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Grid Bot</h1>
          <p className={`text-xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Creates a grid of buy and sell orders to profit from market volatility
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {botTabs.map((tab, index) => (
              <Link
                key={index}
                to={tab.path}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  tab.active
                    ? 'bg-sky-500 text-white'
                    : isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Main Configuration Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`rounded-2xl p-8 border shadow-lg ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700/50' 
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center mb-8">
            <Settings className="w-8 h-8 text-sky-400 mr-4" />
            <h2 className={`text-3xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Grid Bot Configuration</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Trading Pair */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Trading Pair</label>
                <select 
                  value={formData.pair}
                  onChange={(e) => handleInputChange('pair', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="BTCUSDT">BTC/USDT</option>
                  <option value="ETHUSDT">ETH/USDT</option>
                  <option value="XRPUSDT">XRP/USDT</option>
                </select>
              </div>

              {/* Strategy */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Grid Strategy</label>
                <select 
                  value={formData.strategy}
                  onChange={(e) => handleInputChange('strategy', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="Increasing Sell/Increasing Buy (ISIB)">Increasing Sell/Increasing Buy (ISIB)</option>
                  <option value="Fixed Grid">Fixed Grid</option>
                  <option value="Geometric Grid">Geometric Grid</option>
                </select>
              </div>

              {/* Lower Limit */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Lower Price Limit</label>
                <input 
                  type="number"
                  value={formData.lowerLimit}
                  onChange={(e) => handleInputChange('lowerLimit', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter lower price limit"
                />
              </div>

              {/* Upper Limit */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Upper Price Limit</label>
                <input 
                  type="number"
                  value={formData.upperLimit}
                  onChange={(e) => handleInputChange('upperLimit', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter upper price limit"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Investment */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Total Investment (USDT)</label>
                <input 
                  type="number"
                  value={formData.investment}
                  onChange={(e) => handleInputChange('investment', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter total investment amount"
                />
              </div>

              {/* Small Grid */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Small Grid Size</label>
                <input 
                  type="number"
                  value={formData.smallGrid}
                  onChange={(e) => handleInputChange('smallGrid', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter small grid size"
                />
              </div>

              {/* Big Grid */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Large Grid Size</label>
                <input 
                  type="number"
                  value={formData.bigGrid}
                  onChange={(e) => handleInputChange('bigGrid', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter large grid size"
                />
              </div>

              {/* Dip Percentage */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Dip Percentage (%)</label>
                <input 
                  type="number"
                  value={formData.dipPercentage}
                  onChange={(e) => handleInputChange('dipPercentage', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter dip percentage"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={handleSubmit}
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
            >
              <Grid3X3 className="w-5 h-5 mr-2" />
              Start Grid Bot
            </button>
          </div>
        </motion.div>

        {/* Active Grids Display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`mt-12 rounded-2xl border shadow-lg overflow-hidden ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700/50' 
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center p-6 border-b border-gray-700/50">
            <BarChart3 className="w-6 h-6 text-sky-400 mr-3" />
            <h2 className={`text-2xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Active Grid Bots</h2>
          </div>
          
          {/* Empty state */}
          <div className="p-12 text-center">
            <div className={`text-6xl mb-4 ${
              isDarkMode ? 'text-gray-600' : 'text-gray-400'
            }`}>🔲</div>
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              No active grid bots
            </p>
            <p className={`text-sm mt-2 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Configure and start your first grid bot above
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GridBotPage;