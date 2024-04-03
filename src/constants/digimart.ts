export const URL = 'https://www.digimart.net/search?' as const;

export const CATEGORY = {
  INSTRUMENT: 'category12Id',
  TYPE: 'category3Id',
  BRAND: 'brandnames',
  KEYWORD: 'keywordAnd',
  COLOR: 'colors'
} as const;

export const INSTRUMENT = {
  ELECTRIC_GUITAR: 101
} as const;

export interface OptionValue {
  ID: number | null,
  TEXT: string
};

export interface Option {
  [key: string]: OptionValue
};

export const TYPE = {
  STRAT: {
    ID: 10101,
    TEXT: '스트라토캐스터'
  },
  TELE: {
    ID: 10102,
    TEXT: '텔레캐스터'
  },
  LESPAUL: {
    ID: 10103,
    TEXT: '레스폴'
  },
  SEMI_ACOUSTIC: {
    ID: 10104,
    TEXT: '세미 할로우바디'
  },
  FULL_ACOUSTIC: {
    ID: 10105,
    TEXT: '할로우바디'
  },
  MINI: {
    ID: 10106,
    TEXT: '미니/앰프내장'
  },
  SG: {
    ID: 10107,
    TEXT: 'SG'
  },
  JAZZMASTER: {
    ID: 10108,
    TEXT: '재즈마스터'
  },
  JAGUAR: {
    ID: 10109,
    TEXT: '재규어'
  },
  MUSTANG: {
    ID: 10110,
    TEXT: '머스탱'
  },
  FLYING_V: {
    ID: 10111,
    TEXT: '플라잉브이'
  },
  EXPLORER: {
    ID: 10112,
    TEXT: '익스플로러'
  },
  HEADLESS: {
    ID: 10113,
    TEXT: '헤드리스'
  },
  FIREBIRD: {
    ID: 10114,
    TEXT: '파이어버드'
  },
  TRANSFORMED: {
    ID: 10115,
    TEXT: '변형 타입'
  },
  OTHERS: {
    ID: 10199,
    TEXT: '그 외'
  }
} as const;

export const COLOR = {
  SUNBURST: {
    ID: 1006,
    TEXT: '선버스트'
  },
  GOLD: {
    ID: 1007,
    TEXT: '골드'
  },
  SILVER: {
    ID: 1008,
    TEXT: '실버'
  },
  NATURAL: {
    ID: 1009,
    TEXT: '내츄럴'
  },
  WHITE: {
    ID: 1010,
    TEXT: '화이트'
  },
  BLACK: {
    ID: 1011,
    TEXT: '블랙'
  },
  RED: {
    ID: 1012,
    TEXT: '레드'
  },
  PURPLE: {
    ID: 1013,
    TEXT: '퍼플'
  },
  BLUE: {
    ID: 1014,
    TEXT: '블루'
  },
  YELLOW: {
    ID: 1015,
    TEXT: '옐로우'
  },
  GREEN: {
    ID: 1016,
    TEXT: '그린'
  },
  BLONDE: {
    ID: 1017,
    TEXT: '블론드'
  },
  BROWN: {
    ID: 1018,
    TEXT: '브라운'
  }
} as const;
