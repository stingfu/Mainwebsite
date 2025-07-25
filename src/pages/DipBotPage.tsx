import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Settings, BarChart3 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const DipBotPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    symbol: 'BTCUSDT',
    exchange: 'Bybit',
    side: 'Buy',
    timeFrame: '1',
    dip: '1',
    quantity: '5000'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleExecute = () => {
    console.log('Executing Dip Bot with:', formData);
  };

  const botTabs = [
    { name: 'Dip Bot', path: '/dip-bot', active: true },
    { name: 'Grid Bot', path: '/grid-bot', active: false },
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
            <TrendingUp className="w-16 h-16 text-sky-400" />
          </div>
          <h1 className={`text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Dip Bot</h1>
          <p className={`text-xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Automatically buys during market dips and sells at optimal recovery points
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
            }`}>Dip Bot Configuration</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Symbol */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Trading Symbol</label>
                <select 
                  value={formData.symbol}
                  onChange={(e) => handleInputChange('symbol', e.target.value)}
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

              {/* Exchange */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Exchange</label>
                <select 
                  value={formData.exchange}
                  onChange={(e) => handleInputChange('exchange', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="Bybit">Bybit</option>
                  <option value="Binance">Binance</option>
                  <option value="BingX">BingX</option>
                </select>
              </div>

              {/* Side */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Trading Side</label>
                <select 
                  value={formData.side}
                  onChange={(e) => handleInputChange('side', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="Buy">Buy</option>
                  <option value="Sell">Sell</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Time Frame */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Time Frame (minutes)</label>
                <select 
                  value={formData.timeFrame}
                  onChange={(e) => handleInputChange('timeFrame', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="1">1 minute</option>
                  <option value="5">5 minutes</option>
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                </select>
              </div>

              {/* Dip Percentage */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Dip Percentage (%)</label>
                <select 
                  value={formData.dip}
                  onChange={(e) => handleInputChange('dip', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="1">1%</option>
                  <option value="2">2%</option>
                  <option value="3">3%</option>
                  <option value="5">5%</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Investment Amount (USDT)</label>
                <input 
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter amount in USDT"
                />
              </div>
            </div>
          </div>

          {/* Execute Button */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={handleExecute}
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Start Dip Bot
            </button>
          </div>
        </motion.div>

        {/* Orders Table */}
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
            }`}>Active Dip Bot Orders</h2>
          </div>
          
          {/* Table Header */}
          <div className={`px-6 py-4 border-b ${
            isDarkMode 
              ? 'bg-sky-500/20 border-gray-700/50' 
              : 'bg-sky-100 border-gray-200'
          }`}>
            <div className="grid grid-cols-8 gap-4 font-semibold text-sky-400">
              <div>Symbol</div>
              <div>Quantity</div>
              <div>Mode</div>
              <div>Exchange</div>
              <div>Dip %</div>
              <div>Timeframe</div>
              <div>Timestamp</div>
              <div>Action</div>
            </div>
          </div>

          {/* Table Body - Empty state */}
          <div className="p-12 text-center">
            <div className={`text-6xl mb-4 ${
              isDarkMode ? 'text-gray-600' : 'text-gray-400'
            }`}>📊</div>
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              No active dip bot orders
            </p>
            <p className={`text-sm mt-2 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Configure and start your first dip bot above
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DipBotPage;