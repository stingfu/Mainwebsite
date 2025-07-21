import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Shield, Zap, BarChart3, Settings } from 'lucide-react';

const DipBotPage: React.FC = () => {
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
            <TrendingDown className="w-16 h-16 text-sky-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Dip Bot</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automatically identifies market dips and executes strategic buy orders, 
            then sells at optimal recovery points to maximize your profits.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Shield className="w-8 h-8" />,
              title: 'Smart Dip Detection',
              description: 'Advanced algorithms identify genuine market dips vs temporary fluctuations'
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: 'Lightning Fast Execution',
              description: 'Execute trades within milliseconds of dip detection for optimal entry points'
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: 'Risk Management',
              description: 'Built-in stop-loss and take-profit mechanisms to protect your capital'
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

        {/* Bot Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Dip Bot Performance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dip Bot Trading Chart"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Real-time Analysis</h3>
              <p className="text-gray-300">Monitor market conditions and dip patterns in real-time</p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profit Analytics"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Profit Analytics</h3>
              <p className="text-gray-300">Track your bot's performance with detailed analytics</p>
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
            <h2 className="text-3xl font-bold text-white">Bot Configuration</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Dip Threshold (%)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="5"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Investment Amount ($)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="1000"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Take Profit (%)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Risk Management</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Stop Loss (%)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="5"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Max Daily Trades</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="10"
                  />
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
          </div>
          
          <div className="flex justify-center mt-8">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Dip Bot
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DipBotPage;