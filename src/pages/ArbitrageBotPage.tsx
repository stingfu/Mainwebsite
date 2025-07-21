import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft, DollarSign, Clock, BarChart3, Settings } from 'lucide-react';

const ArbitrageBotPage: React.FC = () => {
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
            <ArrowRightLeft className="w-16 h-16 text-sky-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Arbitrage Bot</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploits price differences across multiple exchanges to generate risk-free profits. 
            Simultaneously buys low on one exchange and sells high on another.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <ArrowRightLeft className="w-8 h-8" />,
              title: 'Cross-Exchange Trading',
              description: 'Monitors price differences across multiple cryptocurrency exchanges'
            },
            {
              icon: <DollarSign className="w-8 h-8" />,
              title: 'Risk-Free Profits',
              description: 'Generates profits with minimal market risk through price discrepancies'
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: 'Real-Time Execution',
              description: 'Ultra-fast execution to capture arbitrage opportunities before they disappear'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="text-sky-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Arbitrage Opportunities */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Live Arbitrage Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Exchange Comparison"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Exchange Price Monitor</h3>
              <p className="text-gray-300">Real-time price comparison across supported exchanges</p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/6802052/pexels-photo-6802052.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profit Calculator"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Profit Calculator</h3>
              <p className="text-gray-300">Automatic calculation of potential arbitrage profits</p>
            </div>
          </div>
        </motion.div>

        {/* Configuration Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 mb-16"
        >
          <div className="flex items-center mb-6">
            <Settings className="w-8 h-8 text-sky-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Arbitrage Configuration</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Exchange Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Primary Exchange</label>
                  <select className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600">
                    <option>Binance</option>
                    <option>Bybit</option>
                    <option>BingX</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Secondary Exchange</label>
                  <select className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600">
                    <option>Bybit</option>
                    <option>BingX</option>
                    <option>Binance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Trading Pair</label>
                  <select className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600">
                    <option>BTC/USDT</option>
                    <option>ETH/USDT</option>
                    <option>XRP/USDT</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Arbitrage Parameters</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Minimum Spread (%)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="0.5"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Trade Amount ($)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="1000"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Max Slippage (%)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="0.1"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Arbitrage Bot
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArbitrageBotPage;