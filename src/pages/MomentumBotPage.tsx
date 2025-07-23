import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-t-lg font-medium hover:bg-gray-400"
            >
              Grid Bot
            </Link>
            <Link 
              to="/momentum-bot" 
              className="px-6 py-2 bg-blue-500 text-white rounded-t-lg font-medium"
            >
              Momentum Bot
            </Link>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Momentum Bot</h1>

          {/* Form */}
          <div className="space-y-6 mb-8">
            {/* Base Symbol */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Base Symbol:</label>
              <div className="relative">
                <select 
                  value={formData.baseSymbol}
                  onChange={(e) => handleInputChange('baseSymbol', e.target.value)}
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="ADAUSDC">ADAUSDC</option>
                  <option value="BTCUSDT">BTCUSDT</option>
                  <option value="ETHUSDT">ETHUSDT</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <span className="text-gray-400">×</span>
                </div>
              </div>
            </div>

            {/* Symbols */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Symbols:</label>
              <textarea 
                value={formData.symbols}
                onChange={(e) => handleInputChange('symbols', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                placeholder="Enter symbols separated by commas"
              />
            </div>

            {/* Interval */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Interval:</label>
              <select 
                value={formData.interval}
                onChange={(e) => handleInputChange('interval', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="60">60</option>
              </select>
            </div>

            {/* Number of Days */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Number of Days:</label>
              <input 
                type="number"
                value={formData.numberOfDays}
                onChange={(e) => handleInputChange('numberOfDays', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 mb-12"
          >
            Submit
          </button>

          {/* Orders Table */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Open Momentum Bot Orders</h2>
            
            {/* Table Header */}
            <div className="bg-yellow-400 rounded-t-lg px-4 py-3">
              <div className="grid grid-cols-6 gap-4 font-semibold text-gray-800">
                <div>Base Symbol</div>
                <div>Symbols</div>
                <div>Interval</div>
                <div>Number of Days</div>
                <div>Timestamp</div>
                <div>Action</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="bg-white border border-gray-200 rounded-b-lg">
              {orders.map((order, index) => (
                <div key={index} className="grid grid-cols-6 gap-4 px-4 py-4 border-b border-gray-200 last:border-b-0 items-center">
                  <div className="text-gray-800">{order.baseSymbol}</div>
                  <div className="text-gray-800">{order.symbols}</div>
                  <div className="text-gray-800">{order.interval}</div>
                  <div className="text-gray-800">{order.numberOfDays}</div>
                  <div className="text-gray-800">{order.timestamp}</div>
                  <div>
                    <button 
                      onClick={() => handleDelete(index)}
                      className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MomentumBotPage;