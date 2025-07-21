import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

interface MarketData {
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
}

const MarketTicker: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [marketData, setMarketData] = useState<MarketData[]>([
    { symbol: 'BTC', price: '$42,850', change: '+1,250', changePercent: '+3.01%' },
    { symbol: 'ETH', price: '$2,580', change: '+85', changePercent: '+3.41%' },
    { symbol: 'XRP', price: '$0.62', change: '+0.04', changePercent: '+6.89%' },
    { symbol: 'S&P 500', price: '4,750', change: '+25', changePercent: '+0.53%' },
    { symbol: 'NASDAQ', price: '15,200', change: '+120', changePercent: '+0.80%' },
    { symbol: 'DOW', price: '37,800', change: '+180', changePercent: '+0.48%' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => 
        prev.map(item => ({
          ...item,
          price: item.symbol === 'BTC' ? `$${(Math.random() * 1000 + 42000).toFixed(0)}` :
                 item.symbol === 'ETH' ? `$${(Math.random() * 100 + 2500).toFixed(0)}` :
                 item.symbol === 'XRP' ? `$${(Math.random() * 0.1 + 0.6).toFixed(2)}` :
                 item.price
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`border-b overflow-hidden relative z-10 ${
      isDarkMode 
        ? 'bg-gray-900/90 border-gray-800/50' 
        : 'bg-gray-100/90 border-gray-300/50'
    }`}>
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [-100, -2000] }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...marketData, ...marketData, ...marketData].map((item, index) => (
          <div key={index} className="flex items-center px-6 py-2 text-sm pointer-events-none">
            <span className={`font-semibold mr-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>{item.symbol}</span>
            <span className={`mr-2 ${
              isDarkMode ? 'text-sky-400' : 'text-sky-600'
            }`}>{item.price}</span>
            <span className={`${item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {item.change} ({item.changePercent})
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarketTicker;