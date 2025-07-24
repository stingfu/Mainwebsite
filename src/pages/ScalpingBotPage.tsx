import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, TrendingUp, Target, BarChart3, Settings, Play, Pause, DollarSign, AlertTriangle, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ScalpingBotPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [activeStrategy, setActiveStrategy] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const scalpingStrategies = [
    {
      name: 'Momentum Scalping',
      description: 'Captures quick price movements during high momentum periods',
      timeframe: '1-5 minutes',
      profitTarget: '0.1-0.3%',
      riskLevel: 'Medium',
      features: ['RSI divergence', 'Volume spike detection', 'Quick entry/exit'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Range Scalping',
      description: 'Trades within established support and resistance levels',
      timeframe: '1-3 minutes',
      profitTarget: '0.05-0.2%',
      riskLevel: 'Low',
      features: ['Support/Resistance levels', 'Mean reversion', 'High win rate'],
      image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Breakout Scalping',
      description: 'Exploits price breakouts from consolidation patterns',
      timeframe: '30 seconds - 2 minutes',
      profitTarget: '0.2-0.5%',
      riskLevel: 'High',
      features: ['Pattern recognition', 'Volume confirmation', 'Fast execution'],
      image: 'https://images.pexels.com/photos/6802052/pexels-photo-6802052.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'News Scalping',
      description: 'Capitalizes on price movements from news events',
      timeframe: '10 seconds - 1 minute',
      profitTarget: '0.3-1%',
      riskLevel: 'Very High',
      features: ['News feed integration', 'Sentiment analysis', 'Ultra-fast execution'],
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const performanceMetrics = [
    { label: 'Total Trades', value: '1,247', change: '+12%' },
    { label: 'Win Rate', value: '78.3%', change: '+2.1%' },
    { label: 'Avg Profit', value: '0.18%', change: '+0.03%' },
    { label: 'Daily Return', value: '2.4%', change: '+0.5%' }
  ];

  const riskLevelColors = {
    'Low': 'text-green-400',
    'Medium': 'text-yellow-400',
    'High': 'text-orange-400',
    'Very High': 'text-red-400'
  };

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
          <h1 className={`text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Scalping Bot & Strategies</h1>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Master the art of scalping with our advanced AI-powered bot. Execute lightning-fast trades 
            and capture micro-profits from small price movements with precision timing.
          </p>
        </motion.div>

        {/* Performance Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`rounded-2xl p-8 border mb-16 ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700/50' 
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className={`text-3xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Live Performance</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  isRunning 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isRunning ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                {isRunning ? 'Stop Bot' : 'Start Bot'}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className={`p-6 rounded-xl border ${
                isDarkMode 
                  ? 'bg-gray-700/50 border-gray-600/50' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className={`text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{metric.label}</h3>
                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{metric.value}</span>
                  <span className="text-green-400 text-sm font-semibold">{metric.change}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scalping Strategies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className={`text-4xl font-bold text-center mb-12 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Scalping Strategies</h2>

          {/* Strategy Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {scalpingStrategies.map((strategy, index) => (
              <button
                key={index}
                onClick={() => setActiveStrategy(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeStrategy === index
                    ? 'bg-sky-500 text-white'
                    : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {strategy.name}
              </button>
            ))}
          </div>

          {/* Active Strategy Display */}
          <div className={`rounded-2xl p-8 border ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700/50' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={scalpingStrategies[activeStrategy].image}
                  alt={scalpingStrategies[activeStrategy].name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className={`text-3xl font-bold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{scalpingStrategies[activeStrategy].name}</h3>
                  <p className={`text-lg mb-6 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>{scalpingStrategies[activeStrategy].description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-sky-400 mr-2" />
                      <span className={`font-semibold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Timeframe</span>
                    </div>
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {scalpingStrategies[activeStrategy].timeframe}
                    </span>
                  </div>

                  <div className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center mb-2">
                      <Target className="w-5 h-5 text-green-400 mr-2" />
                      <span className={`font-semibold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Profit Target</span>
                    </div>
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {scalpingStrategies[activeStrategy].profitTarget}
                    </span>
                  </div>

                  <div className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className={`font-semibold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Risk Level</span>
                    </div>
                    <span className={riskLevelColors[scalpingStrategies[activeStrategy].riskLevel as keyof typeof riskLevelColors]}>
                      {scalpingStrategies[activeStrategy].riskLevel}
                    </span>
                  </div>

                  <div className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-sky-400 mr-2" />
                      <span className={`font-semibold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Features</span>
                    </div>
                    <div className="space-y-1">
                      {scalpingStrategies[activeStrategy].features.map((feature, index) => (
                        <div key={index} className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>• {feature}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className={`text-4xl font-bold text-center mb-12 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Why Choose Our Scalping Bot?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Ultra-Fast Execution',
                description: 'Execute trades in milliseconds with our optimized algorithms and direct exchange connections.'
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Advanced Analytics',
                description: 'Real-time market analysis with multiple technical indicators and pattern recognition.'
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: 'Micro-Profit Optimization',
                description: 'Designed to capture small but consistent profits from rapid price movements.'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Precision Entry/Exit',
                description: 'Precise timing for entries and exits based on real-time market conditions.'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'High Frequency Trading',
                description: 'Capable of executing hundreds of trades per day with consistent performance.'
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: 'Customizable Parameters',
                description: 'Fully customizable settings to match your risk tolerance and trading style.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:border-sky-500/50 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700/50' 
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="text-sky-400 mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{feature.title}</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Configuration Panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={`rounded-2xl p-8 border ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700/50' 
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center mb-8">
            <Settings className="w-8 h-8 text-sky-400 mr-4" />
            <h2 className={`text-3xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Scalping Bot Configuration</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className={`text-xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Trading Parameters</h3>
              <div className="space-y-4">
                <div>
                  <label className={`block mb-2 font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Position Size ($)</label>
                  <input 
                    type="number" 
                    className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="500"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Max Trades/Hour</label>
                  <input 
                    type="number" 
                    className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="50"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Trading Pair</label>
                  <select className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}>
                    <option>BTC/USDT</option>
                    <option>ETH/USDT</option>
                    <option>XRP/USDT</option>
                    <option>ADA/USDT</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Risk Management</h3>
              <div className="space-y-4">
                <div>
                  <label className={`block mb-2 font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Stop Loss (%)</label>
                  <input 
                    type="number" 
                    className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="0.1"
                    step="0.01"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Take Profit (%)</label>
                  <input 
                    type="number" 
                    className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="0.2"
                    step="0.01"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Max Daily Loss ($)</label>
                  <input 
                    type="number" 
                    className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="100"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Technical Indicators</h3>
              <div className="space-y-4">
                <div>
                  <label className={`block mb-2 font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>RSI Period</label>
                  <input 
                    type="number" 
                    className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="14"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>EMA Period</label>
                  <input 
                    type="number" 
                    className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="9"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Volume Threshold</label>
                  <input 
                    type="number" 
                    className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="1.5"
                    step="0.1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Save Configuration & Start Scalping
            </button>
          </div>
        </motion.div>

        {/* Warning Notice */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className={`mt-16 p-6 rounded-2xl border-l-4 border-yellow-400 ${
            isDarkMode 
              ? 'bg-yellow-400/10 border-r border-t border-b border-yellow-400/20' 
              : 'bg-yellow-50 border-r border-t border-b border-yellow-200'
          }`}
        >
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className={`font-bold mb-2 ${
                isDarkMode ? 'text-yellow-300' : 'text-yellow-800'
              }`}>Important Risk Disclaimer</h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-yellow-200' : 'text-yellow-700'
              }`}>
                Scalping involves high-frequency trading with significant risks. While our bot is designed for precision, 
                market volatility can lead to rapid losses. Only trade with funds you can afford to lose and ensure you 
                understand the risks involved. Past performance does not guarantee future results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScalpingBotPage;