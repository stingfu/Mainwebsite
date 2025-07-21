import React from 'react';
import { motion } from 'framer-motion';
import { Grid3X3, TrendingUp, Zap, BarChart3, Settings } from 'lucide-react';

const GridBotPage: React.FC = () => {
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
            <Grid3X3 className="w-16 h-16 text-sky-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Grid Bot</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creates a grid of buy and sell orders to capture profits from market volatility. 
            Perfect for sideways markets and range-bound trading.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Grid3X3 className="w-8 h-8" />,
              title: 'Grid Strategy',
              description: 'Automated grid of buy and sell orders at predetermined price levels'
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: 'Volatility Capture',
              description: 'Profits from market fluctuations regardless of overall direction'
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: 'Continuous Trading',
              description: '24/7 automated trading without manual intervention'
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

        {/* Grid Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Grid Trading Visualization</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.pexels.com/photos/6802052/pexels-photo-6802052.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Grid Trading Pattern"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Grid Pattern</h3>
              <p className="text-gray-300">Visual representation of your grid trading strategy</p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Performance Metrics"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Performance Metrics</h3>
              <p className="text-gray-300">Real-time statistics and profit calculations</p>
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
            <h2 className="text-3xl font-bold text-white">Grid Configuration</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Grid Parameters</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Upper Price ($)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="45000"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Lower Price ($)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="40000"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Grid Lines</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Investment Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Total Investment ($)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="5000"
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
                <div>
                  <label className="block text-gray-300 mb-2">Grid Type</label>
                  <select className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600">
                    <option>Arithmetic Grid</option>
                    <option>Geometric Grid</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Grid Bot
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GridBotPage;