import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Grid3X3, Settings } from 'lucide-react';

const GridBotPage: React.FC = () => {
  const [formData, setFormData] = useState({
    pair: 'BTC/USDT',
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
            <h2 className="text-3xl font-bold text-white">Grid Bot Configuration</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Trading Pair */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Trading Pair</label>
                <select 
                  value={formData.pair}
                  onChange={(e) => handleInputChange('pair', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                >
                  <option value="BTC/USDT">BTC/USDT</option>
                  <option value="ETH/USDT">ETH/USDT</option>
                  <option value="XRP/USDT">XRP/USDT</option>
                </select>
              </div>

              {/* Grid Strategy */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Grid Strategy</label>
                <select 
                  value={formData.strategy}
                  onChange={(e) => handleInputChange('strategy', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                >
                  <option value="Increasing Sell/Increasing Buy (ISIB)">Increasing Sell/Increasing Buy (ISIB)</option>
                  <option value="Fixed Grid">Fixed Grid</option>
                  <option value="Geometric Grid">Geometric Grid</option>
                </select>
              </div>

              {/* Lower Price Limit */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Lower Price Limit</label>
                <input 
                  type="number"
                  value={formData.lowerLimit}
                  onChange={(e) => handleInputChange('lowerLimit', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                  placeholder="Enter lower price limit"
                />
              </div>

              {/* Upper Price Limit */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Upper Price Limit</label>
                <input 
                  type="number"
                  value={formData.upperLimit}
                  onChange={(e) => handleInputChange('upperLimit', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                  placeholder="Enter upper price limit"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Total Investment */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Total Investment (USDT)</label>
                <input 
                  type="number"
                  value={formData.investment}
                  onChange={(e) => handleInputChange('investment', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                  placeholder="Enter total investment amount"
                />
              </div>

              {/* Small Grid Size */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Small Grid Size</label>
                <input 
                  type="number"
                  value={formData.smallGrid}
                  onChange={(e) => handleInputChange('smallGrid', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                  placeholder="Enter small grid size"
                />
              </div>

              {/* Large Grid Size */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Large Grid Size</label>
                <input 
                  type="number"
                  value={formData.bigGrid}
                  onChange={(e) => handleInputChange('bigGrid', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
                  placeholder="Enter large grid size"
                />
              </div>

              {/* Dip Percentage */}
              <div>
                <label className="block text-gray-300 font-medium mb-3">Dip Percentage (%)</label>
                <input 
                  type="number"
                  value={formData.dipPercentage}
                  onChange={(e) => handleInputChange('dipPercentage', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors"
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
      </div>
    </div>
  );
};

export default GridBotPage;