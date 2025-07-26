import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface Option {
  value: string;
  label: string;
}

interface SearchableSelectProps {
  options: Option[] | string[];
  value?: string | string[];
  onChange: (value: string | string[]) => void;
  placeholder?: string;
  multiple?: boolean;
  className?: string;
  label?: string;
  required?: boolean;
  error?: boolean;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  multiple = false,
  className = '',
  label,
  required = false,
  error = false
}) => {
  const { isDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Convert string array to Option array
  const normalizedOptions: Option[] = options.map(option => 
    typeof option === 'string' ? { value: option, label: option } : option
  );

  // Filter options based on search term
  const filteredOptions = normalizedOptions.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    option.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get selected options for display
  const selectedOptions = multiple && Array.isArray(value)
    ? normalizedOptions.filter(option => value.includes(option.value))
    : normalizedOptions.find(option => option.value === value);

  // Handle option selection
  const handleOptionSelect = (optionValue: string) => {
    if (multiple && Array.isArray(value)) {
      const newValue = value.includes(optionValue)
        ? value.filter(v => v !== optionValue)
        : [...value, optionValue];
      onChange(newValue);
    } else {
      onChange(optionValue);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  // Handle removing selected option (for multiple select)
  const handleRemoveOption = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (multiple && Array.isArray(value)) {
      onChange(value.filter(v => v !== optionValue));
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getDisplayValue = () => {
    if (multiple && Array.isArray(selectedOptions) && selectedOptions.length > 0) {
      return `${selectedOptions.length} selected`;
    } else if (!multiple && selectedOptions && typeof selectedOptions === 'object') {
      return selectedOptions.label;
    }
    return '';
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <label className={`block mb-2 font-medium ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      {/* Main Select Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-200 ${
          error 
            ? 'border-red-500 bg-red-50' 
            : isDarkMode
              ? 'bg-gray-700 border-gray-600 text-white hover:border-sky-500'
              : 'bg-white border-gray-300 text-gray-900 hover:border-sky-500'
        } ${isOpen ? 'border-sky-500' : ''}`}
      >
        <div className="flex-1 text-left">
          {multiple && Array.isArray(selectedOptions) && selectedOptions.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {selectedOptions.slice(0, 3).map((option) => (
                <span
                  key={option.value}
                  className="inline-flex items-center px-2 py-1 rounded bg-sky-500 text-white text-sm"
                >
                  {option.label}
                  <button
                    onClick={(e) => handleRemoveOption(option.value, e)}
                    className="ml-1 hover:bg-sky-600 rounded"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              {selectedOptions.length > 3 && (
                <span className="px-2 py-1 text-sm text-gray-500">
                  +{selectedOptions.length - 3} more
                </span>
              )}
            </div>
          ) : (
            <span className={getDisplayValue() ? '' : 'text-gray-400'}>
              {getDisplayValue() || placeholder}
            </span>
          )}
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        } ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0 right-0 mt-2 rounded-lg border shadow-lg z-50 ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}
          >
            {/* Search Input */}
            <div className="p-3 border-b border-gray-200 dark:border-gray-700">
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search options..."
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:border-sky-500 focus:outline-none`}
                />
              </div>
            </div>

            {/* Options List */}
            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => {
                  const isSelected = multiple && Array.isArray(value)
                    ? value.includes(option.value)
                    : value === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleOptionSelect(option.value)}
                      className={`w-full px-4 py-3 text-left transition-colors ${
                        isSelected
                          ? 'bg-sky-500 text-white'
                          : isDarkMode
                            ? 'text-gray-300 hover:bg-gray-700'
                            : 'text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.label}</span>
                        {multiple && isSelected && (
                          <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-sky-500 rounded-full" />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className={`px-4 py-3 text-center ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  No options found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchableSelect;