// Trading symbols library for different exchanges and bots
export const tradingSymbols = {
  // Symbols for Dip Bot by exchange
  dipBot: {
    bybit: [
      'BTCUSDT', 'ETHUSDT', 'HOTUSDT', 'IRLUSDT', 'ARBUSDT', 'SPELLUSDT', 'VANRYUSDT', 
      'PSPUSDT', 'RAINUSDT', 'PRIMEUSDT', 'MNTUSDT', 'INSPUSDT', 'ROOTUSDT', 
      'LOOKSUSDT', 'BOBUSDT', 'NYMUSDT', 'DOGEUSDT', 'DYDXUSDT', 'GODSUSDT', 
      'CBXUSDT', 'TONUSDT', 'VRAUSDT', 'BTCUSDC', 'ETHUSDC', 'DOGEUSDC', 'MATICUSDC',
      'LINKUSDC', 'NEARUSDT', 'APTUSDC', 'MNTUSDC', 'ARBUSDC', 'COREUSDT', 'AGIXUSDT',
      'JUPUSDT', 'AVAXUSDC', 'GALAUSDT', 'VELARUSDT', 'BRETTUSDT', 'ONDOUSDT', 'POPCATUSDT',
      'TOKENUSDT', 'THETAUSDT', 'DUELUSDT', 'NAKAUSDT', 'CGPTUSDT', 'ENAUSDT', 'OPUSDT',
      'XRPUSDT', 'SUIUSDT', 'IMXUSDT', 'APTUSDT', 'ADAUSDC', 'DOTUSDC', 'GMTUSDC',
      'SANDUSDC', 'INJUSDT', 'SOLUSDC'
    ],
    binance: [
      'BTCUSDT', 'ETHUSDT', 'XRPUSDT', 'NEARUSDT', 'BADGERUSDT', 'KP3RUSDT',
      'ASTUSDT', 'AUCTIONUSDT', 'IQUSDT', 'NEXOUSDT', 'RPLUSDT', 'WNXMUSDT'
    ],
    bingx: [
      'BTCUSDT', 'ETHUSDT', 'XRPUSDT', 'NEARUSDT', 'VRAUSDT', 'CSPRUSDT'
    ]
  },

  // Symbols for Grid Bot
  gridBot: [
    'BTCUSDT', 'ETHUSDT', 'HOTUSDT', 'IRLUSDT', 'ARBUSDT', 'SPELLUSDT', 'VANRYUSDT', 
    'PSPUSDT', 'RAINUSDT', 'PRIMEUSDT', 'INSPUSDT', 'ROOTUSDT', 'LOOKSUSDT', 'BOBUSDT', 
    'NYMUSDT', 'DOGEUSDT', 'DYDXUSDT', 'GODSUSDT', 'CBXUSDT', 'TONUSDT', 'VRAUSDT', 
    'BTCUSDC', 'ETHUSDC', 'DOGEUSDC', 'MATICUSDC', 'LINKUSDC', 'NEARUSDT', 'APTUSDC', 
    'MNTUSDC', 'ARBUSDC', 'COREUSDT', 'JUPUSDT', 'AVAXUSDC', 'GALAUSDT'
  ],

  // Symbols for Momentum Bot
  momentumBot: [
    'ADAUSDC', 'APTUSDC', 'APTUSDT', 'ARBUSDC', 'ARBUSDT', 'ATHUSDT', 'AIOZUSDT', 'ATOMUSDT', 
    'AXSUSDT', 'BOBUSDT', 'BRETTUSDT', 'CBXUSDT', 'CHZUSDC', 'CSPRUSDT', 'DOGEUSDC', 'DOGEUSDT', 
    'DOTUSDC', 'DUELUSDT', 'ENAUSDT', 'ENSUSDT', 'ETHUSDC', 'ETHUSDT', 'FETUSDC', 'FETUSDT', 
    'FLOKIUSDT', 'FORTUSDT', 'FTMUSDT', 'GALAUSDT', 'GRTUSDT', 'GMTUSDC', 'GODSUSDT', 'HOOKUSDT', 
    'ICPUSDC', 'INJUSDC', 'INJUSDT', 'IRLUSDT', 'IOUSDT', 'JASMYUSDT', 'JUPUSDT', 'KDAUSDT', 
    'LINKUSDC', 'LOOKSUSDT', 'LMWRUSDT', 'MASAUSDT', 'MKRUSDT', 'MNTUSDC', 'MNTUSDT', 'NEARUSDC', 
    'NEARUSDT', 'NYMUSDT', 'OPAUSDT', 'OPUSDC', 'OPUSDT', 'POLUSDT', 'PRIMEUSDT', 'PYTHUSDT', 
    'RAINUSDT', 'RENDERUSDT', 'ROOTUSDT', 'RSS3USDT', 'SANDUSDC', 'SOLUSDC', 'SPECUSDT', 'SUIUSDC', 
    'SUIUSDT', 'STXUSDT', 'TAIUSDT', 'THETAUSDT', 'TOKENUSDT', 'TONUSDT', 'TRVLUSDT', 'TRXUSDC', 
    'VANRYUSDT', 'VELARUSDT', 'VRAUSDT', 'WLDUSDC', 'XCADUSDT', 'XLMUSDC', 'XRPUSDC', 'XRPUSDT', 
    'YFIUSDT', 'ZRXUSDT'
  ]
};

export const timeFrameOptions = [
  { value: '1', label: '1 minute' },
  { value: '3', label: '3 minutes' },
  { value: '5', label: '5 minutes' },
  { value: '10', label: '10 minutes' },
  { value: '15', label: '15 minutes' },
  { value: '20', label: '20 minutes' },
  { value: '30', label: '30 minutes' },
  { value: '60', label: '1 hour' },
  { value: '240', label: '4 hours' }
];

export const dipPercentageOptions = [
  { value: '1', label: '1%' },
  { value: '5', label: '5%' },
  { value: '10', label: '10%' },
  { value: '15', label: '15%' },
  { value: '20', label: '20%' },
  { value: '25', label: '25%' },
  { value: '30', label: '30%' }
];

export const exchangeOptions = [
  { value: 'bybit', label: 'Bybit' },
  { value: 'binance', label: 'Binance' },
  { value: 'bingx', label: 'BingX' }
];

export const orderTypeOptions = [
  { value: 'buy', label: 'Buy' },
  { value: 'sell', label: 'Sell' }
];

export const gridStrategyOptions = [
  { value: 'ISIB', label: 'Increasing Sell/Increasing Buy (ISIB)' },
  { value: 'SR', label: 'Support/Resistance (SR)' },
  { value: 'straight', label: 'Straight' }
];

export const momentumIntervalOptions = [
  { value: '1', label: '1 minute' },
  { value: '3', label: '3 minutes' },
  { value: '5', label: '5 minutes' },
  { value: '15', label: '15 minutes' },
  { value: '30', label: '30 minutes' },
  { value: '60', label: '60 minutes' },
  { value: '120', label: '120 minutes' },
  { value: '240', label: '240 minutes' },
  { value: '360', label: '360 minutes' },
  { value: '720', label: '720 minutes' },
  { value: 'D', label: 'Daily' },
  { value: 'W', label: 'Weekly' },
  { value: 'M', label: 'Monthly' }
];