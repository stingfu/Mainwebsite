import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const PlansPage: React.FC = () => {
  const plans = [
    {
      name: 'Weekly Plan',
      price: '$29',
      period: 'per week',
      features: [
        'Access to all trading bots',
        'Basic analytics',
        'Email support',
        'Up to 3 active bots',
        'Standard execution speed'
      ],
      popular: false
    },
    {
      name: 'Monthly Plan',
      price: '$99',
      period: 'per month',
      features: [
        'All Weekly features',
        'Advanced analytics',
        'Priority support',
        'Up to 10 active bots',
        'High-speed execution',
        'Custom strategies'
      ],
      popular: true
    },
    {
      name: 'Yearly Plan',
      price: '$999',
      period: 'per year',
      features: [
        'All Monthly features',
        'Premium analytics',
        '24/7 priority support',
        'Unlimited active bots',
        'Ultra-fast execution',
        'Personal account manager',
        'Custom bot development'
      ],
      popular: false
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
          <h1 className="text-5xl font-bold text-white mb-6">Choose Your Plan</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the perfect trading plan that fits your needs and trading volume
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-gray-800/50 rounded-2xl p-8 border ${
                plan.popular ? 'border-sky-500' : 'border-gray-700/50'
              } ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-sky-400">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-sky-500 hover:bg-sky-600 text-white'
                    : 'border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            All plans include 7-day money-back guarantee
          </p>
          <p className="text-gray-400">
            Need a custom solution? <a href="#" className="text-sky-400 hover:text-sky-300">Contact our sales team</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PlansPage;