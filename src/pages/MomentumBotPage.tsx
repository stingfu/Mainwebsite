import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Settings } from 'lucide-react';

const MomentumBotPage: React.FC = () => {
  const [formData, setFormData] = useState({
    baseSymbol: 'ADA/USDC',
    symbols: '',
    interval: '1 minute',
    numberOfDays: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Submitting Momentum Bot with:', formData);
  };

  const botTabs = [
    { name: 'Dip Bot', path: '/dip-bot', active: false },
    { name: 'Grid Bot', path: '/grid-bot', active: false },
    { name: 'Momentum Bot', path: '/momentum-bot', active: true },
    { name: 'Arbitrage Bot', path: '/arbitrage-bot', active: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex justify-center gap-2">
            {botTabs.map((tab, index) => (
              <Link
                key={index}
                to={tab.path}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  tab.active
                    ? 'bg-sky-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
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
          className="bg-gray-800/80 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm"
        >
          <div className="flex items-center mb-8">
            <Settings className="w-8 h-8 text-sky-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Momentum Bot Configuration</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Base Trading Symbol */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Base Trading Symbol</label>
                <select 
                  value={formData.baseSymbol}
                  onChange={(e) => handleInputChange('baseSymbol', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                >
                  <option value="ADA/USDC">ADA/USDC</option>
                  <option value="BTC/USDT">BTC/USDT</option>
                  <option value="ETH/USDT">ETH/USDT</option>
                </select>
              </div>

              {/* Trading Symbols */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Trading Symbols</label>
                <textarea 
                  value={formData.symbols}
                  onChange={(e) => handleInputChange('symbols', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors h-24 resize-none"
                  placeholder="Enter symbols separated by commas (e.g., APTUSDC, ATHUSDT, FORTUSDT)"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Time Interval */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Time Interval (minutes)</label>
                <select 
                  value={formData.interval}
                  onChange={(e) => handleInputChange('interval', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                >
                  <option value="1 minute">1 minute</option>
                  <option value="5 minutes">5 minutes</option>
                  <option value="15 minutes">15 minutes</option>
                  <option value="30 minutes">30 minutes</option>
                  <option value="1 hour">1 hour</option>
                </select>
              </div>

              {/* Analysis Period */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Analysis Period (Days)</label>
                <input 
                  type="number"
                  value={formData.numberOfDays}
                  onChange={(e) => handleInputChange('numberOfDays', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
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
      </div>
    </div>
  );
};

export default MomentumBotPage;