import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X, Search } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface SearchableSelectProps {
  options: string[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  placeholder?: string;
  isMultiple?: boolean;
  className?: string;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select option...",
  isMultiple = false,
  className = ""
}) => {
  const { isDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const handleOptionClick = (option: string) => {
    if (isMultiple) {
      const currentValues = Array.isArray(value) ? value : [];
      if (currentValues.includes(option)) {
        onChange(currentValues.filter(v => v !== option));
      } else {
        onChange([...currentValues, option]);
      }
    } else {
      onChange(option);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  const removeOption = (optionToRemove: string) => {
    if (isMultiple && Array.isArray(value)) {
      onChange(value.filter(v => v !== optionToRemove));
    }
  };

  const getDisplayValue = () => {
    if (isMultiple) {
      return Array.isArray(value) ? value : [];
    }
    return value as string;
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className={`w-full rounded-lg px-4 py-2 border cursor-pointer transition-all duration-200 ${
          isDarkMode 
            ? 'bg-gray-700 border-gray-600 text-white hover:border-gray-500' 
            : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
        } ${isOpen ? 'ring-2 ring-sky-500 border-sky-500' : ''}`}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
          }
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 flex flex-wrap gap-1">
            {isMultiple ? (
              Array.isArray(value) && value.length > 0 ? (
                value.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-2 py-1 rounded bg-sky-500 text-white text-sm"
                  >
                    {item}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeOption(item);
                      }}
                      className="ml-1 hover:bg-sky-600 rounded"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))
              ) : (
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {placeholder}
                </span>
              )
            ) : (
              <span className={value ? '' : `${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {value || placeholder}
              </span>
            )}
          </div>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            } ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} 
          />
        </div>
      </div>

      {isOpen && (
        <div className={`absolute z-50 w-full mt-1 rounded-lg border shadow-lg max-h-60 overflow-hidden ${
          isDarkMode 
            ? 'bg-gray-700 border-gray-600' 
            : 'bg-white border-gray-300'
        }`}>
          <div className="p-2 border-b border-gray-200 dark:border-gray-600">
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
                className={`w-full pl-10 pr-4 py-2 rounded border focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                  isDarkMode 
                    ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => {
                const isSelected = isMultiple 
                  ? Array.isArray(value) && value.includes(option)
                  : value === option;
                
                return (
                  <div
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className={`px-4 py-2 cursor-pointer transition-colors duration-150 ${
                      isSelected 
                        ? 'bg-sky-500 text-white' 
                        : isDarkMode 
                          ? 'hover:bg-gray-600 text-gray-200' 
                          : 'hover:bg-gray-100 text-gray-900'
                    }`}
                  >
                    {option}
                  </div>
                );
              })
            ) : (
              <div className={`px-4 py-2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;