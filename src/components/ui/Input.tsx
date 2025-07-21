import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface InputProps {
  type?: 'text' | 'number' | 'email' | 'password';
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  className = '',
  disabled = false,
  required = false
}) => {
  const { isDarkMode } = useTheme();
  
  const inputClasses = isDarkMode
    ? 'w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-sky-500 focus:outline-none transition-colors'
    : 'w-full bg-white text-gray-900 rounded-lg px-4 py-2 border border-gray-300 focus:border-sky-500 focus:outline-none transition-colors';

  return (
    <div className={className}>
      {label && (
        <label className={`block mb-2 font-medium ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={inputClasses}
      />
    </div>
  );
};

export default Input;