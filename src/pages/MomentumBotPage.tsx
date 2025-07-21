import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Target, BarChart3, Settings } from 'lucide-react';

const MomentumBotPage: React.FC = () => {
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
          <h1 className="text-5xl font-bold text-white mb-6">Momentum Bot</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follows market trends and momentum indicators to enter trades at optimal moments. 
            Designed to ride the wave of strong market movements for maximum profit potential.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: 'Trend Following',
              description: 'Identifies and follows strong market trends using advanced technical indicators'
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: 'Momentum Detection',
              description: 'Detects momentum shifts and enters trades at the perfect timing'
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: 'Fast Execution',
              description: 'Lightning-fast trade execution to capture momentum opportunities'
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

        {/* Momentum Analysis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Momentum Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Momentum Indicators"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Momentum Indicators</h3>
              <p className="text-gray-300">RSI, MACD, and custom momentum oscillators working together</p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Trend Analysis"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Trend Analysis</h3>
              <p className="text-gray-300">Real-time trend strength and direction analysis</p>
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
            <h2 className="text-3xl font-bold text-white">Momentum Settings</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Momentum Parameters</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">RSI Period</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="14"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">MACD Fast Period</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="12"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">MACD Slow Period</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="26"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Trading Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Position Size ($)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="2000"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Momentum Threshold</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600"
                    placeholder="70"
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
              Start Momentum Bot
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MomentumBotPage;