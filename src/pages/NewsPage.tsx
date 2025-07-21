import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Globe } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsItems = [
    {
      category: 'Crypto',
      title: 'Bitcoin Reaches New All-Time High',
      excerpt: 'Bitcoin surpasses previous records as institutional adoption continues to grow...',
      date: '2025-01-15',
      image: 'https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      category: 'Market Analysis',
      title: 'Ethereum 2.0 Impact on DeFi Markets',
      excerpt: 'The latest Ethereum upgrade is showing significant effects on decentralized finance...',
      date: '2025-01-14',
      image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      category: 'Stocks',
      title: 'Tech Stocks Rally Amid AI Boom',
      excerpt: 'Technology stocks continue their upward trajectory as AI adoption accelerates...',
      date: '2025-01-13',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      category: 'Crypto',
      title: 'XRP Wins Major Legal Victory',
      excerpt: 'Ripple Labs secures another legal win, boosting XRP price and market sentiment...',
      date: '2025-01-12',
      image: 'https://images.pexels.com/photos/6802052/pexels-photo-6802052.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      category: 'Market Analysis',
      title: 'Global Markets React to Federal Reserve Decision',
      excerpt: 'Stock and crypto markets show mixed reactions to the latest Fed policy announcement...',
      date: '2025-01-11',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      category: 'Stocks',
      title: 'Energy Sector Shows Strong Performance',
      excerpt: 'Renewable energy stocks lead the market with impressive quarterly results...',
      date: '2025-01-10',
      image: 'https://images.pexels.com/photos/6772076/pexels-photo-6772076.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Latest News</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest developments in cryptocurrency and stock markets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-sky-500/50 transition-all duration-300"
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.category === 'Crypto' ? 'bg-sky-500/20 text-sky-400' :
                    item.category === 'Stocks' ? 'bg-green-500/20 text-green-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {item.category}
                  </span>
                  
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                
                <button className="text-sky-400 hover:text-sky-300 text-sm font-semibold transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Load More News
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsPage;