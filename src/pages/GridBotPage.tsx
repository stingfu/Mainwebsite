import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid3X3, TrendingUp, Zap, BarChart3, Settings, AlertCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { validateGridBot } from '../utils/validation';
import { SearchableSelect } from '../components/ui';
import { GRID_BOT_PAIRS } from '../data/tradingSymbols';

const GridBotPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const [formData, setFormData] = useState({
    tradingPair: 'BTC/USDT',
    gridStrategy: 'Increasing Sell/Increasing Buy (ISIB)',
    lowerPriceLimit: '',
    upperPriceLimit: '',
    totalInvestment: '',
    smallGridSize: '',
    largeGridSize: '',
    dipPercentage: ''
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [errorFields, setErrorFields] = useState<string[]>([]);

  const gridStrategyOptions = [
    'Increasing Sell/Increasing Buy (ISIB)',
    'Decreasing Sell/Decreasing Buy (DSDB)',
    'Neutral Grid',
    'Infinity Grid'
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
      setErrorFields([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateGridBot(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      setErrorFields(validation.errorFields);
      return;
    }
    
    // Clear any previous errors
    setErrors([]);
    setErrorFields([]);
    
    // Here you would normally submit to your backend
    console.log('Grid Bot Configuration:', formData);
    alert('Grid Bot started successfully!');
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
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Trading Pair</label>
                <SearchableSelect
                  options={GRID_BOT_PAIRS}
                  value={formData.tradingPair}
                  onChange={(value) => handleInputChange('tradingPair', value)}
                  placeholder="Select trading pair"
                  className={errorFields.includes('tradingPair') ? 'border-red-500' : ''}
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Grid Strategy</label>
                <SearchableSelect
                  options={gridStrategyOptions}
                  value={formData.gridStrategy}
                  onChange={(value) => handleInputChange('gridStrategy', value)}
                  placeholder="Select grid strategy"
                  className={errorFields.includes('gridStrategy') ? 'border-red-500' : ''}
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Lower Price Limit</label>
                <input
                  type="number"
                  value={formData.lowerPriceLimit}
                  onChange={(e) => handleInputChange('lowerPriceLimit', e.target.value)}
                  className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } ${errorFields.includes('lowerPriceLimit') ? 'border-red-500' : ''}`}
                  placeholder="Enter lower price limit"
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Upper Price Limit</label>
                <input
                  type="number"
                  value={formData.upperPriceLimit}
                  onChange={(e) => handleInputChange('upperPriceLimit', e.target.value)}
                  className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } ${errorFields.includes('upperPriceLimit') ? 'border-red-500' : ''}`}
                  placeholder="Enter upper price limit"
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Total Investment (USDT)</label>
                <input
                  type="number"
                  value={formData.totalInvestment}
                  onChange={(e) => handleInputChange('totalInvestment', e.target.value)}
                  className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } ${errorFields.includes('totalInvestment') ? 'border-red-500' : ''}`}
                  placeholder="Enter total investment amount"
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Small Grid Size (%)</label>
                <input
                  type="number"
                  value={formData.smallGridSize}
                  onChange={(e) => handleInputChange('smallGridSize', e.target.value)}
                  className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } ${errorFields.includes('smallGridSize') ? 'border-red-500' : ''}`}
                  placeholder="Enter small grid size"
                  step="0.01"
                  min="0.2"
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Large Grid Size</label>
                <input
                  type="number"
                  value={formData.largeGridSize}
                  onChange={(e) => handleInputChange('largeGridSize', e.target.value)}
                  className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } ${errorFields.includes('largeGridSize') ? 'border-red-500' : ''}`}
                  placeholder="Enter large grid size"
                  step="1"
                  min="1"
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Dip Percentage (%) - Optional</label>
                <input
                  type="number"
                  value={formData.dipPercentage}
                  onChange={(e) => handleInputChange('dipPercentage', e.target.value)}
                  className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } ${errorFields.includes('dipPercentage') ? 'border-red-500' : ''}`}
                  placeholder="Enter dip percentage (optional)"
                />
              </div>
            </div>
          
          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-red-400 font-semibold mb-2">Please fix the following errors:</h3>
                  <ul className="text-red-300 text-sm space-y-1">
                    {errors.map((error, index) => (
                      <li key={index}>• {error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex justify-center">
            <button 
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
            >
              <Grid3X3 className="w-5 h-5 mr-2" />
              Start Grid Bot
            </button>
          </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default GridBotPage;