import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sun, Moon, Globe, Menu, X, Settings, User, UserCog } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import MarketTicker from './MarketTicker';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme, language, toggleLanguage } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const tradingBotOptions = [
    { name: 'Dip Bot', path: '/dip-bot' },
    { name: 'Grid Bot', path: '/grid-bot' },
    { name: 'Momentum Bot', path: '/momentum-bot' },
    { name: 'Arbitrage Bot', path: '/arbitrage-bot' }
  ];

  const planOptions = [
    { name: 'Weekly Plan', path: '/plans?type=weekly' },
    { name: 'Monthly Plan', path: '/plans?type=monthly' },
    { name: 'Yearly Plan', path: '/plans?type=yearly' }
  ];

  const newsOptions = [
    { name: 'Crypto News', path: '/news?category=crypto' },
    { name: 'Stock Market News', path: '/news?category=stocks' },
    { name: 'Market Analysis', path: '/news?category=analysis' }
  ];

  const faqOptions = [
    { name: 'Getting Started', path: '/faq?category=getting-started' },
    { name: 'Trading Bots', path: '/faq?category=bots' },
    { name: 'Billing & Plans', path: '/faq?category=billing' },
    { name: 'Technical Support', path: '/faq?category=support' }
  ];

  const settingsOptions = [
    { name: 'Account Settings', path: '/account-settings', icon: <Settings className="w-4 h-4" /> },
    { name: 'Profile', path: '/profile', icon: <User className="w-4 h-4" /> }
  ];

  const handleDropdownClick = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const DropdownMenu: React.FC<{ options: any[], isVisible: boolean, showIcons?: boolean }> = ({ options, isVisible, showIcons = false }) => (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={`absolute top-full left-0 mt-2 w-48 rounded-xl shadow-2xl border overflow-hidden z-[9999] ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {options.map((option, index) => (
            <Link
              key={index}
              to={option.path}
              className={`flex items-center px-4 py-3 transition-all duration-200 border-b last:border-b-0 cursor-pointer ${
                isDarkMode 
                  ? 'text-white hover:bg-sky-500/30 hover:text-sky-200 border-gray-700' 
                  : 'text-gray-900 hover:bg-sky-100 hover:text-sky-700 border-gray-200'
              }`}
              onClick={handleDropdownItemClick}
            >
              {showIcons && option.icon && (
                <span className="mr-3">{option.icon}</span>
              )}
              {option.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="sticky top-0 z-50 relative">
      {/* Main Header */}
      <header className="bg-black/95 border-gray-800/50 backdrop-blur-md border-b relative z-[100]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-4xl font-black tracking-wider text-white hover:text-sky-400 transition-colors duration-200">STINGFU</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Trading Bots Dropdown */}
              <div 
                className="relative dropdown-container"
              >
                <button 
                  className="text-white hover:text-sky-400 transition-colors duration-200 font-medium"
                  onClick={() => handleDropdownClick('trading')}
                >
                  Trading Bots
                </button>
                <DropdownMenu options={tradingBotOptions} isVisible={activeDropdown === 'trading'} />
              </div>

              {/* Plans Dropdown */}
              <div 
                className="relative dropdown-container"
              >
                <button 
                  className="text-white hover:text-sky-400 transition-colors duration-200 font-medium"
                  onClick={() => handleDropdownClick('plans')}
                >
                  Plans
                </button>
                <DropdownMenu options={planOptions} isVisible={activeDropdown === 'plans'} />
              </div>

              {/* News Dropdown */}
              <div 
                className="relative dropdown-container"
              >
                <button 
                  className="text-white hover:text-sky-400 transition-colors duration-200 font-medium"
                  onClick={() => handleDropdownClick('news')}
                >
                  News
                </button>
                <DropdownMenu options={newsOptions} isVisible={activeDropdown === 'news'} />
              </div>

              {/* FAQ Dropdown */}
              <div 
                className="relative dropdown-container"
              >
                <button 
                  className="text-white hover:text-sky-400 transition-colors duration-200 font-medium"
                  onClick={() => handleDropdownClick('faq')}
                >
                  FAQs
                </button>
                <DropdownMenu options={faqOptions} isVisible={activeDropdown === 'faq'} />
              </div>
            </nav>

            {/* Search Bar & Controls */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="hidden md:flex items-center rounded-lg px-3 py-2 min-w-[200px] bg-gray-800/50">
                <Search className="w-4 h-4 mr-2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none flex-1 text-white placeholder-gray-400"
                />
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 transition-colors duration-200 text-white hover:text-sky-400"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center transition-colors duration-200 text-white hover:text-sky-400"
              >
                <Globe className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>

              {/* Auth Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <Link 
                  to="/signin"
                  className="transition-colors duration-200 font-medium text-white hover:text-sky-400"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup"
                  className="px-4 py-2 rounded-lg transition-colors duration-200 font-medium bg-sky-500 hover:bg-sky-600 text-white"
                >
                  Sign Up
                </Link>

                {/* Settings Dropdown */}
                <div className="relative dropdown-container">
                  <button 
                    className="p-2 transition-colors duration-200 text-white hover:text-sky-400"
                    onClick={() => handleDropdownClick('settings')}
                  >
                    <Settings className="w-5 h-5" />
                  </button>
                  <DropdownMenu options={settingsOptions} isVisible={activeDropdown === 'settings'} showIcons={true} />
                </div>

              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 transition-colors duration-200 text-white hover:text-sky-400"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-900/95 border-t border-gray-800/50"
            >
              <div className="px-4 py-4 space-y-4">
                <Link to="/dip-bot" className="block py-2 text-white hover:text-sky-400" onClick={() => setIsMobileMenuOpen(false)}>Dip Bot</Link>
                <Link to="/grid-bot" className="block py-2 text-white hover:text-sky-400" onClick={() => setIsMobileMenuOpen(false)}>Grid Bot</Link>
                <Link to="/momentum-bot" className="block py-2 text-white hover:text-sky-400" onClick={() => setIsMobileMenuOpen(false)}>Momentum Bot</Link>
                <Link to="/arbitrage-bot" className="block py-2 text-white hover:text-sky-400" onClick={() => setIsMobileMenuOpen(false)}>Arbitrage Bot</Link>
                <Link to="/plans" className="block py-2 text-white hover:text-sky-400" onClick={() => setIsMobileMenuOpen(false)}>Plans</Link>
                <Link to="/news" className="block py-2 text-white hover:text-sky-400" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
                <Link to="/faq" className="block py-2 text-white hover:text-sky-400" onClick={() => setIsMobileMenuOpen(false)}>FAQs</Link>
                <div className="flex space-x-3 pt-4">

                  <Link to="/signin" className="transition-colors duration-200 text-white hover:text-sky-400" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
                  <Link to="/signup" className="px-4 py-2 rounded-lg transition-colors duration-200 bg-sky-500 hover:bg-sky-600 text-white" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>

                  <button 
                    className="p-2 transition-colors duration-200 text-white hover:text-sky-400"
                    onClick={() => handleDropdownClick('settings')}
                  >
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Market Ticker */}
      <MarketTicker />
    </div>
  );
};

export default Header;