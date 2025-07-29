import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Shield, Zap, BarChart3, Settings, AlertCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { validateDipBot } from '../utils/validation';
import { SearchableSelect } from '../components/ui';
import { EXCHANGES, getSymbolsForExchange } from '../data/tradingSymbols';

const DipBotPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const [formData, setFormData] = useState({
    symbol: 'BTC/USDT',
    exchange: 'Bybit',
    tradingSide: 'Buy',
    timeFrame: '1 minute',
    dipPercentage: '1%',
    investmentAmount: '5000'
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [errorFields, setErrorFields] = useState<string[]>([]);

  const timeFrameOptions = [
    '1 minute',
    '5 minutes',
    '15 minutes',
    '30 minutes',
    '1 hour',
    '4 hours',
    '1 day'
  ];

  const tradingSideOptions = ['Buy', 'Sell'];
  
  const dipPercentageOptions = [
    '0.5%',
    '1%',
    '1.5%',
    '2%',
    '2.5%',
    '3%',
    '4%',
    '5%'
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
    const validation = validateDipBot(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      setErrorFields(validation.errorFields);
      return;
    }
    
    // Clear any previous errors
    setErrors([]);
    setErrorFields([]);
    
    // Here you would normally submit to your backend
    console.log('Dip Bot Configuration:', formData);
    alert('Dip Bot started successfully!');
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
          className={`rounded-2xl p-8 border mb-16 ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700/50' 
              : 'bg-white/50 border-gray-200/50'
          }`}
        >
          <div className="flex items-center mb-6">
            <Settings className="w-8 h-8 text-sky-400 mr-4" />
            <h2 className={`text-3xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Bot Configuration</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Trading Symbol</label>
                <SearchableSelect
                  options={getSymbolsForExchange(formData.exchange)}
                  value={formData.symbol}
                  onChange={(value) => handleInputChange('symbol', value)}
                  placeholder="Select trading symbol"
                  className={errorFields.includes('symbol') ? 'border-red-500' : ''}
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Exchange</label>
                <SearchableSelect
                  options={EXCHANGES}
                  value={formData.exchange}
                  onChange={(value) => handleInputChange('exchange', value)}
                  placeholder="Select exchange"
                  className={errorFields.includes('exchange') ? 'border-red-500' : ''}
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Trading Side</label>
                <SearchableSelect
                  options={tradingSideOptions}
                  value={formData.tradingSide}
                  onChange={(value) => handleInputChange('tradingSide', value)}
                  placeholder="Select trading side"
                  className={errorFields.includes('tradingSide') ? 'border-red-500' : ''}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Time Frame (minutes)</label>
                <SearchableSelect
                  options={timeFrameOptions}
                  value={formData.timeFrame}
                  onChange={(value) => handleInputChange('timeFrame', value)}
                  placeholder="Select time frame"
                  className={errorFields.includes('timeFrame') ? 'border-red-500' : ''}
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Dip Percentage (%)</label>
                <SearchableSelect
                  options={dipPercentageOptions}
                  value={formData.dipPercentage}
                  onChange={(value) => handleInputChange('dipPercentage', value)}
                  placeholder="Select dip percentage"
                  className={errorFields.includes('dipPercentage') ? 'border-red-500' : ''}
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Investment Amount (USDT)</label>
                <input
                  type="number"
                  value={formData.investmentAmount}
                  onChange={(e) => handleInputChange('investmentAmount', e.target.value)}
                  className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } ${errorFields.includes('investmentAmount') ? 'border-red-500' : ''}`}
                  placeholder="Enter investment amount"
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
                <TrendingDown className="w-5 h-5 mr-2" />
                Start Dip Bot
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default DipBotPage;