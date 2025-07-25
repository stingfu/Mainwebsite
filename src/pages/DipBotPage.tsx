import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Settings } from 'lucide-react';

const DipBotPage: React.FC = () => {
  const [formData, setFormData] = useState({
    symbol: 'BTC/USDT',
    exchange: 'Bybit',
    side: 'Buy',
    timeFrame: '1 minute',
    dip: '1%',
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
            <h2 className="text-3xl font-bold text-white">Dip Bot Configuration</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Trading Symbol */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Trading Symbol</label>
                <select 
                  value={formData.symbol}
                  onChange={(e) => handleInputChange('symbol', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                >
                  <option value="BTC/USDT">BTC/USDT</option>
                  <option value="ETH/USDT">ETH/USDT</option>
                  <option value="XRP/USDT">XRP/USDT</option>
                </select>
              </div>

              {/* Exchange */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Exchange</label>
                <select 
                  value={formData.exchange}
                  onChange={(e) => handleInputChange('exchange', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                >
                  <option value="Bybit">Bybit</option>
                  <option value="Binance">Binance</option>
                  <option value="BingX">BingX</option>
                </select>
              </div>

              {/* Trading Side */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Trading Side</label>
                <select 
                  value={formData.side}
                  onChange={(e) => handleInputChange('side', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
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
                <label className="block text-gray-300 font-medium mb-3">Time Frame (minutes)</label>
                <select 
                  value={formData.timeFrame}
                  onChange={(e) => handleInputChange('timeFrame', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                >
                  <option value="1 minute">1 minute</option>
                  <option value="5 minutes">5 minutes</option>
                  <option value="15 minutes">15 minutes</option>
                  <option value="30 minutes">30 minutes</option>
                  <option value="1 hour">1 hour</option>
                </select>
              </div>

              {/* Dip Percentage */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Dip Percentage (%)</label>
                <select 
                  value={formData.dip}
                  onChange={(e) => handleInputChange('dip', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                >
                  <option value="1%">1%</option>
                  <option value="2%">2%</option>
                  <option value="3%">3%</option>
                  <option value="5%">5%</option>
                </select>
              </div>

              {/* Investment Amount */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Investment Amount (USDT)</label>
                <input 
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                  placeholder="5000"
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
      </div>
    </div>
  );
};

export default DipBotPage;