import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f5e6a3 0%, #d4af37 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Trading Bots</h2>
          <div className="flex space-x-1">
            <Link 
              to="/dip-bot" 
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-t-lg font-medium hover:bg-gray-400"
            >
              Dip Bot
            </Link>
            <Link 
              to="/grid-bot" 
              className="px-6 py-2 bg-blue-500 text-white rounded-t-lg font-medium"
            >
              Grid Bot
            </Link>
            <Link 
              to="/momentum-bot" 
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-t-lg font-medium hover:bg-gray-400"
            >
              Momentum Bot
            </Link>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Grid Bot</h1>

          {/* Form */}
          <div className="space-y-6 mb-8">
            {/* Pair */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Pair:</label>
              <div className="relative">
                <select 
                  value={formData.pair}
                  onChange={(e) => handleInputChange('pair', e.target.value)}
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="BTCUSDT">BTCUSDT</option>
                  <option value="ETHUSDT">ETHUSDT</option>
                  <option value="XRPUSDT">XRPUSDT</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <span className="text-gray-400">×</span>
                </div>
              </div>
            </div>

            {/* Strategy */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Strategy:</label>
              <select 
                value={formData.strategy}
                onChange={(e) => handleInputChange('strategy', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Increasing Sell/Increasing Buy (ISIB)">Increasing Sell/Increasing Buy (ISIB)</option>
                <option value="Fixed Grid">Fixed Grid</option>
                <option value="Geometric Grid">Geometric Grid</option>
              </select>
            </div>

            {/* Lower Limit */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Lower Limit:</label>
              <input 
                type="number"
                value={formData.lowerLimit}
                onChange={(e) => handleInputChange('lowerLimit', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Upper Limit */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Upper Limit:</label>
              <input 
                type="number"
                value={formData.upperLimit}
                onChange={(e) => handleInputChange('upperLimit', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Investment */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Investment:</label>
              <input 
                type="number"
                value={formData.investment}
                onChange={(e) => handleInputChange('investment', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Small Grid */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Small Grid:</label>
              <input 
                type="number"
                value={formData.smallGrid}
                onChange={(e) => handleInputChange('smallGrid', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Big Grid */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Big Grid:</label>
              <input 
                type="number"
                value={formData.bigGrid}
                onChange={(e) => handleInputChange('bigGrid', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Dip Percentage */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Dip Percentage:</label>
              <input 
                type="number"
                value={formData.dipPercentage}
                onChange={(e) => handleInputChange('dipPercentage', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridBotPage;