export interface ICurrency {
  unit: string;
  sign: string;
  rate: number;
  exchangedate: string;
}

export interface IExchangeNbu {
  r030: number,
  txt: string,
  rate: number,
  cc: string,
  exchangedate: string
}
