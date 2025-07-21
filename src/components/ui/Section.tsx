import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  background?: 'default' | 'alternate' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  className = '',
  background = 'default',
  padding = 'lg'
}) => {
  const { isDarkMode } = useTheme();
  
  const backgroundClasses = {
    default: '',
    alternate: isDarkMode ? 'bg-gray-900/50' : 'bg-gray-100/50',
    gradient: 'bg-gradient-to-br from-sky-500/10 to-purple-600/10'
  };
  
  const paddingClasses = {
    sm: 'py-12 px-4',
    md: 'py-16 px-4',
    lg: 'py-20 px-4'
  };

  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className={`text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-xl ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;