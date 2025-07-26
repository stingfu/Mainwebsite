import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Settings, AlertCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SearchableSelect from '../components/ui/SearchableSelect';
import { tradingSymbols, timeFrameOptions, dipPercentageOptions, exchangeOptions, orderTypeOptions } from '../data/tradingSymbols';
import { validateDipBot, checkDuplicateOrder, ValidationError, DipBotFormData } from '../utils/validation';

const DipBotPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    symbol: '',
    exchange: 'bybit',
    orderType: 'buy',
    timeFrame: '1',
    dipPercentage: '1',
    quantity: ''
  });
  
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [availableSymbols, setAvailableSymbols] = useState<string[]>([]);
  const [existingOrders] = useState<DipBotFormData[]>([]); // This would come from your backend

  // Update available symbols when exchange changes
  useEffect(() => {
    if (formData.exchange) {
      setAvailableSymbols(tradingSymbols.dipBot[formData.exchange as keyof typeof tradingSymbols.dipBot] || []);
      // Reset symbol if it's not available in the new exchange
      if (formData.symbol && !tradingSymbols.dipBot[formData.exchange as keyof typeof tradingSymbols.dipBot]?.includes(formData.symbol)) {
        setFormData(prev => ({ ...prev, symbol: '' }));
      }
    }
  }, [formData.exchange, formData.symbol]);

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear errors for this field when user starts typing
    setErrors(prev => prev.filter(error => error.field !== field));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const validationErrors = validateDipBot(formData);
    
    // Check for duplicate orders
    if (validationErrors.length === 0 && checkDuplicateOrder(formData, existingOrders)) {
      validationErrors.push({ field: 'general', message: 'Duplicate Order: This configuration already exists' });
    }
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Clear errors and submit
    setErrors([]);
    console.log('Executing Dip Bot with:', formData);
    // Here you would typically send the data to your backend
  };

  const getFieldError = (fieldName: string) => {
    return errors.find(error => error.field === fieldName);
  };

  const hasFieldError = (fieldName: string) => {
    return errors.some(error => error.field === fieldName);
  };

  const botTabs = [
    { name: 'Dip Bot', path: '/dip-bot', active: true },
    { name: 'Grid Bot', path: '/grid-bot', active: false },
    { name: 'Momentum Bot', path: '/momentum-bot', active: false },
    { name: 'Arbitrage Bot', path: '/arbitrage-bot', active: false }
  ];

  return (
    <div className={`min-h-screen py-20 px-4 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex justify-center gap-2">
            {botTabs.map((tab, index) => (
              <Link
                key={index}
                to={tab.path}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  tab.active
                    ? 'bg-sky-500 text-white'
                    : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Main Configuration Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`rounded-2xl p-8 border backdrop-blur-sm ${
            isDarkMode 
              ? 'bg-gray-800/80 border-gray-700/50' 
              : 'bg-white/80 border-gray-200/50'
          }`}
        >
          <div className="flex items-center mb-8">
            <Settings className="w-8 h-8 text-sky-400 mr-4" />
            <h2 className={`text-3xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Dip Bot Configuration</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Exchange */}
              <SearchableSelect
                label="Exchange"
                options={exchangeOptions}
                value={formData.exchange}
                onChange={(value) => handleInputChange('exchange', value as string)}
                placeholder="Select exchange"
                required
                error={hasFieldError('exchange')}
              />

              {/* Trading Symbol */}
              <SearchableSelect
                label="Trading Symbol"
                options={availableSymbols}
                value={formData.symbol}
                onChange={(value) => handleInputChange('symbol', value as string)}
                placeholder="Select trading symbol"
                required
                error={hasFieldError('symbol')}
              />

              {/* Trading Side */}
              <SearchableSelect
                label="Trading Side"
                options={orderTypeOptions}
                value={formData.orderType}
                onChange={(value) => handleInputChange('orderType', value as string)}
                placeholder="Select trading side"
                required
                error={hasFieldError('orderType')}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Time Frame */}
              <SearchableSelect
                label="Time Frame"
                options={timeFrameOptions}
                value={formData.timeFrame}
                onChange={(value) => handleInputChange('timeFrame', value as string)}
                placeholder="Select time frame"
                required
                error={hasFieldError('timeFrame')}
              />

              {/* Dip Percentage */}
              <SearchableSelect
                label="Dip Percentage"
                options={dipPercentageOptions}
                value={formData.dipPercentage}
                onChange={(value) => handleInputChange('dipPercentage', value as string)}
                placeholder="Select dip percentage"
                required
                error={hasFieldError('dipPercentage')}
              />

              {/* Investment Amount */}
              <div>
                <label className={`block font-medium mb-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Quantity
                  <span className="text-red-400 ml-1">*</span>
                </label>
                <input 
                  type="text"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                  className={`w-full rounded-lg px-4 py-3 border transition-colors ${
                    hasFieldError('quantity')
                      ? 'border-red-500 bg-red-50'
                      : isDarkMode
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-sky-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-sky-500'
                  } focus:outline-none`}
                  placeholder="Enter quantity"
                />
                {getFieldError('quantity') && (
                  <p className="mt-1 text-sm text-red-500">{getFieldError('quantity')?.message}</p>
                )}
              </div>
            </div>
            </div>

            {/* Error Messages */}
            {errors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4"
              >
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-red-800 font-medium mb-2">Please fix the following errors:</h3>
                    <ul className="text-red-700 text-sm space-y-1">
                      {errors.map((error, index) => (
                        <li key={index}>• {error.message}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button 
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
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