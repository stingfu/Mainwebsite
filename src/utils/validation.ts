export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  errorFields: string[];
}

export const validateDipBot = (formData: any): ValidationResult => {
  const errors: string[] = [];
  const errorFields: string[] = [];

  // Check required fields
  if (!formData.symbol) {
    errors.push("Trading Symbol is required");
    errorFields.push("symbol");
  }

  if (!formData.exchange) {
    errors.push("Exchange is required");
    errorFields.push("exchange");
  }

  if (!formData.tradingSide) {
    errors.push("Trading Side is required");
    errorFields.push("tradingSide");
  }

  if (!formData.timeFrame) {
    errors.push("Time Frame is required");
    errorFields.push("timeFrame");
  }

  if (!formData.dipPercentage) {
    errors.push("Dip Percentage is required");
    errorFields.push("dipPercentage");
  }

  if (!formData.investmentAmount) {
    errors.push("Investment Amount is required");
    errorFields.push("investmentAmount");
  } else {
    const amount = parseFloat(formData.investmentAmount);
    if (isNaN(amount) || amount <= 0) {
      errors.push("Investment Amount must be a positive number");
      errorFields.push("investmentAmount");
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    errorFields
  };
};

export const validateGridBot = (formData: any): ValidationResult => {
  const errors: string[] = [];
  const errorFields: string[] = [];

  // Check for blank fields (except dip_percentage)
  const requiredFields = {
    'tradingPair': formData.tradingPair,
    'gridStrategy': formData.gridStrategy,
    'lowerPriceLimit': formData.lowerPriceLimit,
    'upperPriceLimit': formData.upperPriceLimit,
    'totalInvestment': formData.totalInvestment,
    'smallGridSize': formData.smallGridSize,
    'largeGridSize': formData.largeGridSize
  };

  for (const [fieldName, value] of Object.entries(requiredFields)) {
    if (!value || value.toString().trim() === '') {
      errors.push(`${fieldName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} cannot be blank`);
      errorFields.push(fieldName);
    }
  }

  // Perform conversions and validations
  try {
    const lowerLimitVal = parseFloat(formData.lowerPriceLimit);
    const upperLimitVal = parseFloat(formData.upperPriceLimit);
    const investmentVal = parseFloat(formData.totalInvestment);
    const smallGridVal = parseFloat(formData.smallGridSize);
    const largeGridVal = parseFloat(formData.largeGridSize);
    const dipPercentageVal = formData.dipPercentage ? parseFloat(formData.dipPercentage) : 0.0;

    // Check if small_grid is at least 0.2
    if (!isNaN(smallGridVal) && smallGridVal < 0.2) {
      errors.push("Small Grid must be at least 0.2% to ensure profitability.");
      errorFields.push('smallGridSize');
    }

    // Check if big_grid is a positive integer
    if (!isNaN(largeGridVal) && ((largeGridVal - Math.floor(largeGridVal)) !== 0 || largeGridVal <= 0)) {
      errors.push("Large Grid must be a positive integer");
      errorFields.push('largeGridSize');
    }

    // Check if small_grid is not greater than big_grid
    if (!isNaN(smallGridVal) && !isNaN(largeGridVal) && smallGridVal > largeGridVal) {
      errors.push("Small Grid cannot be greater than Large Grid");
      errorFields.push('smallGridSize');
      errorFields.push('largeGridSize');
    }

    // Check if lower_limit is less than upper_limit
    if (!isNaN(lowerLimitVal) && !isNaN(upperLimitVal) && lowerLimitVal >= upperLimitVal) {
      errors.push("Lower Limit must be less than Upper Limit");
      errorFields.push('lowerPriceLimit');
      errorFields.push('upperPriceLimit');
    }

    // Calculate price_array_check and validate big_grid
    if (!isNaN(lowerLimitVal) && !isNaN(upperLimitVal) && !isNaN(smallGridVal) && !isNaN(largeGridVal)) {
      const priceArrayCheck = [lowerLimitVal];
      let l = lowerLimitVal;
      
      while (l < upperLimitVal) {
        const nextL = l + (l * (smallGridVal / 100));
        if (nextL >= upperLimitVal) {
          if (l < upperLimitVal) {
            priceArrayCheck.push(upperLimitVal);
          }
          break;
        }
        priceArrayCheck.push(nextL);
        l = nextL;
      }

      const maxBigGrids = priceArrayCheck.length;
      if (largeGridVal > priceArrayCheck.length) {
        errors.push(`Large Grid must be less than or equal to ${priceArrayCheck.length}. Maximum allowed is ${maxBigGrids}.`);
        errorFields.push('largeGridSize');
      }

      // Check minimum investment per small grid
      const totalSmallGrids = priceArrayCheck.length - 1; // Number of intervals between levels
      if (totalSmallGrids > 0 && !isNaN(investmentVal)) {
        const investmentPerSmallGrid = investmentVal / totalSmallGrids;
        if (investmentPerSmallGrid < 10) {
          errors.push(`Investment per small grid must be at least $10. Current value: $${investmentPerSmallGrid.toFixed(2)}`);
          errorFields.push('totalInvestment');
          errorFields.push('smallGridSize');
          errorFields.push('lowerPriceLimit');
          errorFields.push('upperPriceLimit');
        }
      }
    }
  } catch (error) {
    errors.push("Invalid numeric values provided");
    errorFields.push('lowerPriceLimit', 'upperPriceLimit', 'totalInvestment', 'smallGridSize', 'largeGridSize');
  }

  return {
    isValid: errors.length === 0,
    errors,
    errorFields
  };
};

export const validateMomentumBot = (formData: any): ValidationResult => {
  const errors: string[] = [];
  const errorFields: string[] = [];

  // Check required fields
  if (!formData.baseSymbol) {
    errors.push("Base Trading Symbol is required");
    errorFields.push("baseSymbol");
  }

  if (!formData.tradingSymbols || formData.tradingSymbols.length === 0) {
    errors.push("At least one trading symbol must be selected");
    errorFields.push("tradingSymbols");
  }

  if (!formData.timeInterval) {
    errors.push("Time Interval is required");
    errorFields.push("timeInterval");
  }

  if (!formData.analysisPeriod) {
    errors.push("Analysis Period is required");
    errorFields.push("analysisPeriod");
  } else {
    const days = parseInt(formData.analysisPeriod);
    if (isNaN(days) || days <= 0) {
      errors.push("Analysis Period must be a positive number");
      errorFields.push("analysisPeriod");
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    errorFields
  };
};