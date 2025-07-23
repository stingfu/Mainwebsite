import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SignInPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in:', { email, password, rememberMe });
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  const handleExchangeLogin = (exchange: string) => {
    console.log(`Login with ${exchange}`);
  };

  return (
    <div className={`min-h-screen flex ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img 
          src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Trading Dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-600/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
            <p className="text-xl">Continue your trading journey with STINGFU</p>
          </div>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Back Button */}
          <Link 
            to="/"
            className={`inline-flex items-center mb-8 transition-colors ${
              isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Sign In</h1>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Welcome back! Please sign in to your account.
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleSocialLogin('google')}
              className={`w-full flex items-center justify-center px-4 py-3 border rounded-lg transition-colors ${
                isDarkMode 
                  ? 'border-gray-600 bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-900'
              }`}
            >
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5 mr-3" />
              Continue with Google
            </button>
            
            <button
              onClick={() => handleSocialLogin('facebook')}
              className="w-full flex items-center justify-center px-4 py-3 border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continue with Facebook
            </button>
          </div>

          {/* Exchange Login Buttons */}
          <div className="mb-6">
            <p className={`text-sm text-center mb-3 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Or connect with your exchange</p>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleExchangeLogin('binance')}
                className={`flex flex-col items-center p-3 border rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'border-gray-600 bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-900'
                }`}
              >
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">B</span>
                </div>
                <span className="text-xs">Binance</span>
              </button>
              
              <button
                onClick={() => handleExchangeLogin('bybit')}
                className={`flex flex-col items-center p-3 border rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'border-gray-600 bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-900'
                }`}
              >
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">By</span>
                </div>
                <span className="text-xs">Bybit</span>
              </button>
              
              <button
                onClick={() => handleExchangeLogin('coinbase')}
                className={`flex flex-col items-center p-3 border rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'border-gray-600 bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-900'
                }`}
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">C</span>
                </div>
                <span className="text-xs">Coinbase</span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className={`absolute inset-0 flex items-center ${
              isDarkMode ? 'text-gray-600' : 'text-gray-400'
            }`}>
              <div className={`w-full border-t ${
                isDarkMode ? 'border-gray-600' : 'border-gray-300'
              }`} />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${
                isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-500'
              }`}>Or continue with email</span>
            </div>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email Address
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                    isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500"
                />
                <span className={`ml-2 text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Remember me</span>
              </label>
              <Link 
                to="/forgot-password" 
                className="text-sm text-sky-600 hover:text-sky-500"
              >
                Forgot password?
              </Link>
            </div>

            {/* reCAPTCHA placeholder */}
            <div className={`p-4 border rounded-lg ${
              isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-gray-50'
            }`}>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>I'm not a robot</span>
                <div className="ml-auto">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className={`text-center mt-6 text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Don't have an account?{' '}
            <Link to="/signup" className="text-sky-600 hover:text-sky-500 font-semibold">
              Sign up
            </Link>
          </p>

          {/* Forgot Email Link */}
          <p className={`text-center mt-2 text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <Link to="/forgot-email" className="text-sky-600 hover:text-sky-500">
              Forgot your email?
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignInPage;