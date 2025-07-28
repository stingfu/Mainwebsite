import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Bot, Shield, Zap, BarChart3, DollarSign, ChevronLeft, ChevronRight, Grid3X3, ArrowRightLeft } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HomePage: React.FC = () => {
  const { isDarkMode } = useTheme();

  const bots = [
    {
      name: 'Dip Bot',
      description: 'Automatically buys during market dips and sells at optimal recovery points.',
      icon: <TrendingUp className="w-12 h-12" />,
      features: ['Smart dip detection', 'Risk management', 'Automated execution'],
      detailedDescription: 'The Dip Bot uses advanced algorithms to identify genuine market dips versus temporary fluctuations. It automatically executes buy orders when prices drop below predetermined thresholds and sells when the market recovers, maximizing your profit potential.',
      gifUrl: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: [
        'Captures market opportunities 24/7',
        'Reduces emotional trading decisions',
        'Built-in risk management',
        'Customizable dip thresholds'
      ],
      path: '/dip-bot'
    },
    {
      name: 'Grid Bot',
      description: 'Creates a grid of buy and sell orders to profit from market volatility.',
      icon: <Grid3X3 className="w-12 h-12" />,
      features: ['Grid strategy', 'Volatility capture', 'Continuous trading'],
      detailedDescription: 'Grid Bot places multiple buy and sell orders at regular intervals above and below the current market price. As the market fluctuates, it profits from each price movement, making it perfect for sideways markets.',
      gifUrl: 'https://images.pexels.com/photos/7567526/pexels-photo-7567526.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: [
        'Profits from market volatility',
        'Works in sideways markets',
        'Automated grid management',
        'Customizable grid parameters'
      ],
      path: '/grid-bot'
    },
    {
      name: 'Momentum Bot',
      description: 'Follows market trends and momentum to maximize profit opportunities.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Trend following', 'Momentum detection', 'Fast execution'],
      detailedDescription: 'Momentum Bot analyzes market trends using technical indicators like RSI, MACD, and moving averages. It enters trades when strong momentum is detected and exits before trend reversals, riding the wave of market movements.',
      gifUrl: 'https://images.pexels.com/photos/7567482/pexels-photo-7567482.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: [
        'Follows strong market trends',
        'Advanced technical analysis',
        'Lightning-fast execution',
        'Momentum-based entry/exit'
      ],
      path: '/momentum-bot'
    },
    {
      name: 'Arbitrage Bot',
      description: 'Exploits price differences across exchanges for risk-free profits.',
      icon: <ArrowRightLeft className="w-12 h-12" />,
      features: ['Cross-exchange trading', 'Risk-free profits', 'Real-time execution'],
      detailedDescription: 'Arbitrage Bot monitors price differences across multiple exchanges simultaneously. When a profitable spread is detected, it instantly buys on the lower-priced exchange and sells on the higher-priced one, capturing risk-free profits.',
      gifUrl: 'https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: [
        'Risk-free profit opportunities',
        'Multi-exchange monitoring',
        'Ultra-fast execution',
        'Automated spread detection'
      ],
      path: '/arbitrage-bot'
    }
  ];

  const [currentBotIndex, setCurrentBotIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentBotIndex((prev) => (prev + 1) % bots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, bots.length]);

  const nextBot = () => {
    setCurrentBotIndex((prev) => (prev + 1) % bots.length);
    setIsAutoPlaying(false);
  };

  const prevBot = () => {
    setCurrentBotIndex((prev) => (prev - 1 + bots.length) % bots.length);
    setIsAutoPlaying(false);
  };

  const selectBot = (index: number) => {
    setCurrentBotIndex(index);
    setIsAutoPlaying(false);
  };

  const strategies = [
    { name: 'DCA Strategy', image: '📈', description: 'Dollar-cost averaging for steady growth' },
    { name: 'Scalping', image: '⚡', description: 'Quick profits from small price movements', path: '/scalping-bot' },
    { name: 'Swing Trading', image: '🎯', description: 'Capture medium-term price swings' },
    { name: 'HODLing', image: '💎', description: 'Long-term holding strategy' }
  ];

  const exchanges = [
    { name: 'Binance', logo: '🔶' },
    { name: 'Bybit', logo: '🟡' },
    { name: 'BingX', logo: '🔵' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={isDarkMode ? '' : 'text-gray-900'}
            >
              <h1 className={`text-5xl lg:text-6xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Trade with the
                <span className="text-sky-400 block">Best Trading Bots</span>
              </h1>
              <p className={`text-xl mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Why hustle by yourself when you can automate your trading with our advanced AI-powered bots?
              </p>
              <div className="flex space-x-4">
                <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Start Trading
                </button>
                <button className="border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                  Learn More
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-sky-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
                <img 
                  src="https://images.pexels.com/photos/6772076/pexels-photo-6772076.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Trading Charts"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trading Bots Section */}
      <section className={`py-20 px-4 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Our Trading Bots</h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Advanced AI-powered trading solutions for every strategy</p>
          </motion.div>

          {/* Interactive Slideshow */}
          <div className={`rounded-3xl p-8 border ${
            isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'
          }`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - GIF/Visual */}
              <motion.div
                key={currentBotIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={bots[currentBotIndex].gifUrl}
                    alt={`${bots[currentBotIndex].name} demonstration`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sky-400 mb-2">{bots[currentBotIndex].icon}</div>
                    <h3 className="text-2xl font-bold">{bots[currentBotIndex].name}</h3>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Explanation */}
              <motion.div
                key={`content-${currentBotIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h3 className={`text-3xl font-bold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{bots[currentBotIndex].name}</h3>
                  <p className={`text-lg mb-6 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>{bots[currentBotIndex].detailedDescription}</p>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Key Benefits:</h4>
                  <ul className="space-y-3">
                    {bots[currentBotIndex].benefits.map((benefit, index) => (
                      <li key={index} className={`flex items-center ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <Shield className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={bots[currentBotIndex].path}
                  className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Try {bots[currentBotIndex].name}
                </Link>
              </motion.div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Bot Indicators */}
              <div className="flex space-x-2">
                {bots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => selectBot(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentBotIndex 
                        ? 'bg-sky-500 w-8' 
                        : isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevBot}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextBot}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Bot Selection Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {bots.map((bot, index) => (
                <button
                  key={index}
                  onClick={() => selectBot(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    index === currentBotIndex
                      ? 'bg-sky-500 text-white'
                      : isDarkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {bot.name}
                </button>
              ))}
            </div>

            {/* Auto-play Toggle */}
            <div className="text-center mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`}
              >
                {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial GIFs Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>How It Works</h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Watch our trading bots in action</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50"
              >
                <div className="bg-gradient-to-br from-sky-500/20 to-purple-600/20 rounded-lg h-48 flex items-center justify-center mb-4">
                  <Bot className="w-16 h-16 text-sky-400" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Tutorial {item}</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Step-by-step guide to setting up your trading bot</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Strategies Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Trading Strategies</h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Proven strategies for maximum returns</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 text-center hover:border-sky-500/50 transition-all duration-300 ${
                  strategy.path ? 'cursor-pointer' : ''
                }`}
                onClick={() => strategy.path && (window.location.href = strategy.path)}
              >
                <div className="text-4xl mb-4">{strategy.image}</div>
                <h3 className={`text-lg font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{strategy.name}</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{strategy.description}</p>
                {strategy.path && (
                  <div className="mt-4">
                    <span className="text-sky-400 text-sm font-semibold">Click to explore →</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Partnerships */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Our Exchange Partners</h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Trusted by leading cryptocurrency exchanges</p>
          </motion.div>

          <div className="flex justify-center items-center space-x-12">
            {exchanges.map((exchange, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{exchange.logo}</div>
                <h3 className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{exchange.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 py-12 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Contact Us</h3>
            <p className="text-sky-400 text-lg">stingfupvtltd@stingfu.com</p>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className={`mb-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Copyright © 2025 STINGFU. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Privacy Policy</a>
              <a href="#" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Terms of Use</a>
              <a href="#" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Service Policy</a>
              <a href="#" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Legal</a>
              <a href="#" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Site Map</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;