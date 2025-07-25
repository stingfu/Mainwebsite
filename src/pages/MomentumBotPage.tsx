import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Settings, BarChart3, Trash2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const MomentumBotPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    baseSymbol: 'ADAUSDC',
    symbols: '',
    interval: '1',
    numberOfDays: ''
  });

  const [orders] = useState([
    {
      baseSymbol: 'ADAUSDC',
      symbols: 'APTUSDC, ATHUSDT, FORTUSDT',
      interval: '5min',
      numberOfDays: 10,
      timestamp: '2025-04-16 15:52:15'
    },
    {
      baseSymbol: 'APTUSDC',
      symbols: 'APTUSDC, APTUSDT',
      interval: '30min',
      numberOfDays: 12,
      timestamp: '2025-05-20 15:28:44'
    }
  ]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Submitting Momentum Bot with:', formData);
  };

  const handleDelete = (index: number) => {
    console.log('Deleting order at index:', index);
  };

  const botTabs = [
    { name: 'Dip Bot', path: '/dip-bot', active: false },
    { name: 'Grid Bot', path: '/grid-bot', active: false },
    { name: 'Momentum Bot', path: '/momentum-bot', active: true },
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
            <Zap className="w-16 h-16 text-sky-400" />
          </div>
          <h1 className={`text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Momentum Bot</h1>
          <p className={`text-xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Follows market trends and momentum to maximize profit opportunities
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
            }`}>Momentum Bot Configuration</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Base Symbol */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Base Trading Symbol</label>
                <select 
                  value={formData.baseSymbol}
                  onChange={(e) => handleInputChange('baseSymbol', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="ADAUSDC">ADA/USDC</option>
                  <option value="BTCUSDT">BTC/USDT</option>
                  <option value="ETHUSDT">ETH/USDT</option>
                </select>
              </div>

              {/* Symbols */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Trading Symbols</label>
                <textarea 
                  value={formData.symbols}
                  onChange={(e) => handleInputChange('symbols', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 h-24 resize-none ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter symbols separated by commas (e.g., APTUSDC, ATHUSDT, FORTUSDT)"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Interval */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Time Interval (minutes)</label>
                <select 
                  value={formData.interval}
                  onChange={(e) => handleInputChange('interval', e.target.value)}
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

              {/* Number of Days */}
              <div>
                <label className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Analysis Period (Days)</label>
                <input 
                  type="number"
                  value={formData.numberOfDays}
                  onChange={(e) => handleInputChange('numberOfDays', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter number of days for analysis"
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
              <Zap className="w-5 h-5 mr-2" />
              Start Momentum Bot
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
            }`}>Active Momentum Bot Orders</h2>
          </div>
          
          {/* Table Header */}
          <div className={`px-6 py-4 border-b ${
            isDarkMode 
              ? 'bg-sky-500/20 border-gray-700/50' 
              : 'bg-sky-100 border-gray-200'
          }`}>
            <div className="grid grid-cols-6 gap-4 font-semibold text-sky-400">
              <div>Base Symbol</div>
              <div>Symbols</div>
              <div>Interval</div>
              <div>Days</div>
              <div>Timestamp</div>
              <div>Action</div>
            </div>
          </div>

          {/* Table Body */}
          <div>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <div key={index} className={`grid grid-cols-6 gap-4 px-6 py-4 border-b last:border-b-0 items-center ${
                  isDarkMode ? 'border-gray-700/50' : 'border-gray-200'
                }`}>
                  <div className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{order.baseSymbol}</div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>{order.symbols}</div>
                  <div className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{order.interval}</div>
                  <div className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{order.numberOfDays}</div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{order.timestamp}</div>
                  <div>
                    <button 
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center">
                <div className={`text-6xl mb-4 ${
                  isDarkMode ? 'text-gray-600' : 'text-gray-400'
                }`}>⚡</div>
                <p className={`text-lg ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  No active momentum bot orders
                </p>
                <p className={`text-sm mt-2 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  Configure and start your first momentum bot above
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MomentumBotPage;