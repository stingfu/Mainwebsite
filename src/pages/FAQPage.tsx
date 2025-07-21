import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Getting Started',
      question: 'How do I get started with STINGFU trading bots?',
      answer: 'Getting started is simple! Sign up for an account, choose your preferred plan, connect your exchange API keys, and configure your first trading bot. Our setup wizard will guide you through the entire process.'
    },
    {
      category: 'Trading Bots',
      question: 'What types of trading bots do you offer?',
      answer: 'We offer four main types of trading bots: Dip Bot (for buying dips), Grid Bot (for volatility trading), Momentum Bot (for trend following), and Arbitrage Bot (for cross-exchange opportunities).'
    },
    {
      category: 'Getting Started',
      question: 'Is my money safe with STINGFU?',
      answer: 'Yes, your funds remain in your own exchange accounts. We only use API keys with trading permissions - we never have access to your funds directly. All API connections use read-only and trading permissions only.'
    },
    {
      category: 'Trading Bots',
      question: 'Can I run multiple bots simultaneously?',
      answer: 'Yes! Depending on your plan, you can run multiple bots simultaneously. Weekly plans allow up to 3 bots, Monthly plans up to 10 bots, and Yearly plans have unlimited bot usage.'
    },
    {
      category: 'Billing & Plans',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! You can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period.'
    },
    {
      category: 'Technical Support',
      question: 'What exchanges are supported?',
      answer: 'We currently support Binance, Bybit, and BingX. We are continuously working to add more exchanges based on user demand and technical feasibility.'
    },
    {
      category: 'Trading Bots',
      question: 'How much profit can I expect?',
      answer: 'Profits vary based on market conditions, bot settings, and investment amount. While we cannot guarantee profits, our bots are designed to optimize trading opportunities and risk management.'
    },
    {
      category: 'Technical Support',
      question: 'Do you offer 24/7 support?',
      answer: 'Monthly and Yearly plan subscribers get priority support with faster response times. Yearly subscribers also get 24/7 priority support and a personal account manager.'
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <HelpCircle className="w-16 h-16 text-sky-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions about STINGFU trading bots
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
              {category}
            </h2>
            
            <div className="space-y-4">
              {faqs
                .filter(faq => faq.category === category)
                .map((faq, index) => {
                  const globalIndex = faqs.findIndex(f => f === faq);
                  return (
                    <div
                      key={globalIndex}
                      className="bg-gray-800/50 rounded-lg border border-gray-700/50 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </h3>
                        {openFAQ === globalIndex ? (
                          <Minus className="w-5 h-5 text-sky-400 flex-shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 text-sky-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {openFAQ === globalIndex && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <p className="text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-gray-300 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;