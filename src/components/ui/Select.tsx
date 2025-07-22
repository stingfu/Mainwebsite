import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder,
  className = '',
  disabled = false,
  required = false
}) => {
  const { isDarkMode } = useTheme();
  
  const selectClasses = isDarkMode
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
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={selectClasses}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;