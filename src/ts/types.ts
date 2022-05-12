import { acceptedCoins } from "src/constants/acceptedCoins";

// CoinGecko Types
export type Token = {
  name: string;
  abbreviation: string;
  color: string;
  price: number;
};

export interface CGCoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: Date;
  atl: number;
  atl_change_percentage: number;
  atl_date: Date;
  roi: CGCoinRoi | null;
  last_updated: Date;
}

export interface CGCoinRoi {
  times: number;
  currency: string;
  percentage: number;
}

// React Navigation Types
export type RootStackParamList = {
  Home: undefined;
  Swap: { token: string } | undefined;
};

export type SwapStackParamList = {
  SwapHome: { token: string } | undefined;
  SwapSuccess: undefined;
  SwapFailure: undefined;
  SwapConfirmation: undefined;
};
