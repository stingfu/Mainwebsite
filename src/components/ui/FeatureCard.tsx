import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
  delay = 0
}) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-sky-500/50 transition-all duration-300 ${className}`}
    >
      <div className="text-sky-400 mb-4">{icon}</div>
      <h3 className={`text-xl font-bold mb-4 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h3>
      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;