import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f5e6a3 0%, #d4af37 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Trading Bots</h2>
          <div className="flex space-x-1">
            <Link 
              to="/dip-bot" 
              className="px-6 py-2 bg-blue-500 text-white rounded-t-lg font-medium"
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
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-t-lg font-medium hover:bg-gray-400"
            >
              Momentum Bot
            </Link>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Dip Bot</h1>

          {/* Form */}
          <div className="space-y-6 mb-8">
            {/* Symbol */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Symbol:</label>
              <div className="relative">
                <select 
                  value={formData.symbol}
                  onChange={(e) => handleInputChange('symbol', e.target.value)}
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

            {/* Exchange */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Exchange:</label>
              <select 
                value={formData.exchange}
                onChange={(e) => handleInputChange('exchange', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Bybit">Bybit</option>
                <option value="Binance">Binance</option>
                <option value="BingX">BingX</option>
              </select>
            </div>

            {/* Side */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Side:</label>
              <select 
                value={formData.side}
                onChange={(e) => handleInputChange('side', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </div>

            {/* Time Frame */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Time Frame:</label>
              <select 
                value={formData.timeFrame}
                onChange={(e) => handleInputChange('timeFrame', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="60">60</option>
              </select>
            </div>

            {/* Dip */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Dip:</label>
              <select 
                value={formData.dip}
                onChange={(e) => handleInputChange('dip', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Quantity:</label>
              <input 
                type="number"
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Execute Button */}
          <button 
            onClick={handleExecute}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Execute
          </button>

          {/* Orders Table */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Open Dip Bot Orders</h2>
            
            {/* Table Header */}
            <div className="bg-yellow-400 rounded-t-lg px-4 py-3">
              <div className="grid grid-cols-8 gap-4 font-semibold text-gray-800">
                <div>Symbol</div>
                <div>Quantity</div>
                <div>Mode</div>
                <div>Exchange</div>
                <div>Dip</div>
                <div>Timeframe</div>
                <div>Timestamp</div>
                <div>Action</div>
              </div>
            </div>

            {/* Table Body - Empty state */}
            <div className="bg-white border border-gray-200 rounded-b-lg p-8 text-center text-gray-500">
              No open orders
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DipBotPage;