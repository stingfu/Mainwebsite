import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'glass' | 'gradient';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
  variant = 'default'
}) => {
  const { isDarkMode } = useTheme();
  
  const baseClasses = 'rounded-2xl border transition-all duration-300';
  
  const variantClasses = {
    default: isDarkMode 
      ? 'bg-gray-800/50 border-gray-700/50' 
      : 'bg-white border-gray-200',
    glass: 'bg-gray-800/30 border-gray-700/30 backdrop-blur-sm',
    gradient: 'bg-gradient-to-br from-sky-500/10 to-purple-600/10 border-sky-500/20'
  };
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const hoverClasses = hover 
    ? 'hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10' 
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;