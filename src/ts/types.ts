// CoinGecko Types
export type Token = {
	name: string;
	abbreviation: string;
	color: string;
	price: number;
};

// React Navigation Types
export type RootStackParamList = {
	Home: undefined;
	Swap: { token: string } | undefined;
};

export type SwapStackParamList = {
	SwapHome: { token: string } | undefined;
	SwapSuccess: undefined;
	SwapFailure: undefined;
};
