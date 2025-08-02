import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Phone, ArrowLeft, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ForgotEmailFormProps {
  onBack?: () => void;
}

const EnhancedForgotEmailForm: React.FC<ForgotEmailFormProps> = ({ onBack }) => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [method, setMethod] = useState<'phone' | 'name'>('phone');
  const [formData, setFormData] = useState({
    phone: '',
    firstName: '',
    lastName: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock validation
    if (method === 'phone' && !formData.phone) {
      setError('Phone number is required');
      setIsLoading(false);
      return;
    }

    if (method === 'name' && (!formData.firstName || !formData.lastName)) {
      setError('Both first and last name are required');
      setIsLoading(false);
      return;
    }

    // Success simulation
    setIsSuccess(true);
    setIsLoading(false);
  };

  if (isSuccess) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center p-8 ${
          isDarkMode
            ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md text-center"
        >
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h1
            className={`text-3xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Email Found!
          </h1>
          <p
            className={`mb-8 ${
              isDarkMethod ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            We've sent your email address to{' '}
            {method === 'phone' ? `your phone (${formData.phone})` : 'you'} along with a sign-in link.
          </p>
          <div className="space-y-4">
            {onBack ? (
              <button
                onClick={onBack}
                className="block w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Back to Sign In
              </button>
            ) : (
              <Link
                to="/signin"
                className="block w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Back to Sign In
              </Link>
            )}
            <button
              onClick={() => setIsSuccess(false)}
              className={`block w-full border py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                isDarkMode
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Try Different Information
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-8 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        {/* Back Button */}
        {onBack ? (
          <button
            onClick={onBack}
            className={`inline-flex items-center mb-8 transition-colors ${
              isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sign In
          </button>
        ) : (
          <Link
            to="/signin"
            className={`inline-flex items-center mb-8 transition-colors ${
              isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sign In
          </Link>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className={`text-3xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Forgot Email?
          </h1>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            Enter your personal information and we'll help you recover your email address.
          </p>
        </div>

        {/* Method Selection */}
        <div className="flex mb-6 bg-gray-700 rounded-xl p-1">
          <button
            onClick={() => setMethod('phone')}
            className={`flex-1 flex items-center justify-center py-2 px-4 rounded-lg text-sm font-medium transition-all ${
              method === 'phone'
                ? 'bg-gray-600 text-blue-400 shadow-sm'
                : 'text-gray-300 hover:text-gray-100'
            }`}
          >
            <Phone className="w-4 h-4 mr-2" />
            Phone Number
          </button>
          <button
            onClick={() => setMethod('name')}
            className={`flex-1 flex items-center justify-center py-2 px-4 rounded-lg text-sm font-medium transition-all ${
              method === 'name'
                ? 'bg-gray-600 text-blue-400 shadow-sm'
                : 'text-gray-300 hover:text-gray-100'
            }`}
          >
            <User className="w-4 h-4 mr-2" />
            Full Name
          </button>
        </div>

        {/* Forgot Email Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {method === 'phone' ? (
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                />
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                    isDarkMode
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
              {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
              <p
                className={`text-xs mt-2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                We'll send your email address to this phone number via SMS
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  First Name
                </label>
                <div className="relative">
                  <User
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  />
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="John"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Last Name
                </label>
                <div className="relative">
                  <User
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  />
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              {error && <p className="col-span-2 text-red-400 text-xs mt-1">{error}</p>}
            </div>
          )}

          {/* reCAPTCHA Placeholder */}
          <div
            className={`p-4 border rounded-lg ${
              isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              <input type="checkbox" className="mr-3" required />
              <span
                className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                I'm not a robot
              </span>
              <div className="ml-auto">
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Searching...' : 'Recover Email'}
          </button>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-6 space-y-2">
          <p
            className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Remember your email?{' '}
            {onBack ? (
              <button
                onClick={onBack}
                className="text-sky-600 hover:text-sky-500 font-semibold"
              >
                Sign in
              </button>
            ) : (
              <Link to="/signin" className="text-sky-600 hover:text-sky-500 font-semibold">
                Sign in
              </Link>
            )}
          </p>
          <p
            className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <Link to="/forgot-password" className="text-sky-600 hover:text-sky-500">
              Forgot your password instead?
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedForgotEmailForm;
