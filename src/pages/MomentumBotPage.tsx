import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Target, BarChart3, Settings, AlertCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { validateMomentumBot } from '../utils/validation';
import { SearchableSelect } from '../components/ui';
import { MOMENTUM_BOT_SYMBOLS } from '../data/tradingSymbols';

const MomentumBotPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const [formData, setFormData] = useState({
    baseSymbol: 'ADA/USDC',
    tradingSymbols: [] as string[],
    timeInterval: '1 minute',
    analysisPeriod: ''
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [errorFields, setErrorFields] = useState<string[]>([]);

  const timeIntervalOptions = [
    '1 minute',
    '5 minutes',
    '15 minutes',
    '30 minutes',
    '1 hour',
    '4 hours',
    '1 day'
  ];

  const handleInputChange = (name: string, value: string | string[]) => {
    if (name === 'tradingSymbols' && Array.isArray(value)) {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
      setErrorFields([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateMomentumBot(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      setErrorFields(validation.errorFields);
      return;
    }
    
    // Clear any previous errors
    setErrors([]);
    setErrorFields([]);
    
    // Here you would normally submit to your backend
    console.log('Momentum Bot Configuration:', formData);
    alert('Momentum Bot started successfully!');
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
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Base Trading Symbol</label>
                <SearchableSelect
                  options={MOMENTUM_BOT_SYMBOLS}
                  value={formData.baseSymbol}
                  onChange={(value) => handleInputChange('baseSymbol', value)}
                  placeholder="Select base trading symbol"
                  className={errorFields.includes('baseSymbol') ? 'border-red-500' : ''}
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Time Interval (minutes)</label>
                <SearchableSelect
                  options={timeIntervalOptions}
                  value={formData.timeInterval}
                  onChange={(value) => handleInputChange('timeInterval', value)}
                  placeholder="Select time interval"
                  className={errorFields.includes('timeInterval') ? 'border-red-500' : ''}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Trading Symbols</label>
                <SearchableSelect
                  options={MOMENTUM_BOT_SYMBOLS}
                  value={formData.tradingSymbols}
                  onChange={(value) => handleInputChange('tradingSymbols', value)}
                  placeholder="Enter symbols separated by commas (e.g., APTUSDC, ATHUSDT, FORTUSDT)"
                  isMultiple={true}
                  className={errorFields.includes('tradingSymbols') ? 'border-red-500' : ''}
                />
              </div>
              
              <div>
                <label className={`block mb-2 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Analysis Period (Days)</label>
                <input
                  type="number"
                  value={formData.analysisPeriod}
                  onChange={(e) => handleInputChange('analysisPeriod', e.target.value)}
                  className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } ${errorFields.includes('analysisPeriod') ? 'border-red-500' : ''}`}
                  placeholder="Enter number of days for analysis"
                  min="1"
                  step="1"
                />
              </div>
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
              <Zap className="w-5 h-5 mr-2" />
              Start Momentum Bot
            </button>
          </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default MomentumBotPage;