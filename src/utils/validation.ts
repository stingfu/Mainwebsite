// Validation utilities for trading bots

export interface ValidationError {
  field: string;
  message: string;
}

export interface DipBotFormData {
  symbol: string;
  quantity: string;
  orderType: string;
  exchange: string;
  dipPercentage: string;
  timeFrame: string;
}

export interface GridBotFormData {
  pair: string;
  strategy: string;
  lowerLimit: string;
  upperLimit: string;
  investment: string;
  smallGrid: string;
  bigGrid: string;
  dipPercentage: string;
}

export interface MomentumBotFormData {
  baseSymbol: string;
  symbols: string[];
  interval: string;
  numberOfDays: string;
}

// Dip Bot Validation
export const validateDipBot = (data: DipBotFormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Check for required fields
  if (!data.symbol) {
    errors.push({ field: 'symbol', message: 'Symbol is required' });
  }
  if (!data.quantity) {
    errors.push({ field: 'quantity', message: 'Quantity is required' });
  }
  if (!data.orderType) {
    errors.push({ field: 'orderType', message: 'Order type is required' });
  }
  if (!data.exchange) {
    errors.push({ field: 'exchange', message: 'Exchange is required' });
  }
  if (!data.dipPercentage) {
    errors.push({ field: 'dipPercentage', message: 'Dip percentage is required' });
  }
  if (!data.timeFrame) {
    errors.push({ field: 'timeFrame', message: 'Time frame is required' });
  }

  // Validate quantity is a positive number
  if (data.quantity) {
    const quantity = parseFloat(data.quantity);
    if (isNaN(quantity) || quantity <= 0) {
      errors.push({ field: 'quantity', message: 'Quantity must be a positive number' });
    }
  }

  return errors;
};

// Grid Bot Validation (based on your Flask validation logic)
export const validateGridBot = (data: GridBotFormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Check for blank fields (except dip_percentage)
  const requiredFields = {
    pair: 'Pair',
    strategy: 'Strategy',
    lowerLimit: 'Lower Limit',
    upperLimit: 'Upper Limit',
    investment: 'Investment',
    smallGrid: 'Small Grid',
    bigGrid: 'Big Grid'
  };

  for (const [field, label] of Object.entries(requiredFields)) {
    if (!data[field as keyof GridBotFormData]) {
      errors.push({ field, message: `${label} cannot be blank` });
    }
  }

  // If any required field is missing, return early
  if (errors.length > 0) {
    return errors;
  }

  try {
    const lowerLimitVal = parseFloat(data.lowerLimit);
    const upperLimitVal = parseFloat(data.upperLimit);
    const investmentVal = parseFloat(data.investment);
    const smallGridVal = parseFloat(data.smallGrid);
    const bigGridVal = parseFloat(data.bigGrid);
    const dipPercentageVal = data.dipPercentage ? parseFloat(data.dipPercentage) : 0.0;

    // Check if values are valid numbers
    if (isNaN(lowerLimitVal)) {
      errors.push({ field: 'lowerLimit', message: 'Lower Limit must be a valid number' });
    }
    if (isNaN(upperLimitVal)) {
      errors.push({ field: 'upperLimit', message: 'Upper Limit must be a valid number' });
    }
    if (isNaN(investmentVal)) {
      errors.push({ field: 'investment', message: 'Investment must be a valid number' });
    }
    if (isNaN(smallGridVal)) {
      errors.push({ field: 'smallGrid', message: 'Small Grid must be a valid number' });
    }
    if (isNaN(bigGridVal)) {
      errors.push({ field: 'bigGrid', message: 'Big Grid must be a valid number' });
    }

    // If any conversion failed, return early
    if (errors.length > 0) {
      return errors;
    }

    // 2. Check if small_grid is at least 0.2
    if (smallGridVal < 0.2) {
      errors.push({ field: 'smallGrid', message: 'Small Grid must be at least 0.2% to ensure profitability.' });
    }

    // 3. Check if big_grid is a positive integer
    if ((bigGridVal - Math.floor(bigGridVal)) !== 0 || bigGridVal <= 0) {
      errors.push({ field: 'bigGrid', message: 'Big Grid must be a positive integer' });
    }

    // 4. Check if small_grid is not greater than big_grid
    if (smallGridVal > bigGridVal) {
      errors.push({ field: 'smallGrid', message: 'Small Grid cannot be greater than Big Grid' });
      errors.push({ field: 'bigGrid', message: 'Small Grid cannot be greater than Big Grid' });
    }

    // 5. Check if lower_limit is less than upper_limit
    if (lowerLimitVal >= upperLimitVal) {
      errors.push({ field: 'lowerLimit', message: 'Lower Limit must be less than Upper Limit' });
      errors.push({ field: 'upperLimit', message: 'Lower Limit must be less than Upper Limit' });
    }

    // 6. Calculate price_array_check and validate big_grid
    const priceArrayCheck = [lowerLimitVal];
    let currentPrice = lowerLimitVal;
    
    while (currentPrice < upperLimitVal) {
      const nextPrice = currentPrice + (currentPrice * (smallGridVal / 100));
      if (nextPrice >= upperLimitVal) {
        if (currentPrice < upperLimitVal) {
          priceArrayCheck.push(upperLimitVal);
        }
        break;
      }
      priceArrayCheck.push(nextPrice);
      currentPrice = nextPrice;
    }

    const maxBigGrids = priceArrayCheck.length;
    if (bigGridVal > priceArrayCheck.length) {
      errors.push({ 
        field: 'bigGrid', 
        message: `Big Grid must be less than or equal to ${priceArrayCheck.length}. Maximum allowed is ${maxBigGrids}.` 
      });
    }

    // 7. Check minimum investment per small grid
    const totalSmallGrids = priceArrayCheck.length - 1; // Number of intervals between levels
    if (totalSmallGrids > 0) {
      const investmentPerSmallGrid = investmentVal / totalSmallGrids;
      if (investmentPerSmallGrid < 10) {
        errors.push({ 
          field: 'investment', 
          message: `Investment per small grid must be at least $10. Current value: $${investmentPerSmallGrid.toFixed(2)}` 
        });
      }
    }

  } catch (error) {
    errors.push({ field: 'general', message: 'Invalid input values provided' });
  }

  return errors;
};

// Momentum Bot Validation
export const validateMomentumBot = (data: MomentumBotFormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Check for required fields
  if (!data.baseSymbol) {
    errors.push({ field: 'baseSymbol', message: 'Base Symbol is required' });
  }
  if (!data.symbols || data.symbols.length === 0) {
    errors.push({ field: 'symbols', message: 'At least one symbol must be selected' });
  }
  if (!data.interval) {
    errors.push({ field: 'interval', message: 'Interval is required' });
  }
  if (!data.numberOfDays) {
    errors.push({ field: 'numberOfDays', message: 'Number of Days is required' });
  }

  // Validate numberOfDays is a positive integer
  if (data.numberOfDays) {
    const days = parseInt(data.numberOfDays);
    if (isNaN(days) || days <= 0) {
      errors.push({ field: 'numberOfDays', message: 'Number of Days must be a positive integer' });
    }
  }

  return errors;
};

// Check for duplicate orders (simplified version)
export const checkDuplicateOrder = (
  newOrder: DipBotFormData,
  existingOrders: DipBotFormData[]
): boolean => {
  return existingOrders.some(order => 
    order.symbol === newOrder.symbol &&
    order.orderType === newOrder.orderType &&
    order.dipPercentage === newOrder.dipPercentage &&
    order.timeFrame === newOrder.timeFrame
  );
};