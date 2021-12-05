const baseUrl = 'https://api.coinranking.com/v2';

export interface CoinrankingResponse<Data = unknown> {
  status: string;
  data: Data;
  message?: string;
}

export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  btcPrice: string;
  listedAt: number;
  change: string;
  rank: number;
  sparkline: string[];
  coinrankingUrl: string;
  '24hVolume': string;
}

export interface Exchange {
  coinrankingUrl: string;
  uuid: string;
  name: string;
  iconUrl: string;
  numberOfMarkets: number;
  '24hVolume': string;
  rank: number;
  marketShare: string;
  verified: boolean;
  recommended: boolean;
}

export interface Stats {
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}

export interface FullCoinInformation {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: [
    {
      name: string;
      url: string;
      type: string;
    },
  ];
  supply: {
    confirmed: boolean;
    circulating: string;
    total: string;
  },
  '24hVolume': string;
  marketCap: string;
  price: string;
  btcPrice: string;
  change: string;
  rank: number;
  numberOfMarkets: number;
  numberOfExchanges: number;
  sparkline: string[],
  allTimeHigh: {
    price: string;
    timestamp: number;
  },
  coinrankingUrl: string;
}

export type FetchStatsResponse = CoinrankingResponse<{
  stats: Stats;
}>;

export type FetchAllCoinsResponse = CoinrankingResponse<{
  coins: Coin[];
}>;

export type FetchExchangesResponse = CoinrankingResponse<{
  exchanges: Exchange[];
}>;

export type FetchFullCoinInformationResponse = CoinrankingResponse<{
  coin: FullCoinInformation;
}>;

export const fetchAllCoins = async (): Promise<Coin[] | undefined> => {
  const fetchData = await fetch(`${baseUrl}/coins`);
  const data = await fetchData.json() as FetchAllCoinsResponse;

  if (data.status === 'success') {
    return data.data.coins;
  }

  throw new Error(data.message);
};

export const fetchStats = async (): Promise<Stats | undefined> => {
  const fetchData = await fetch(`${baseUrl}/stats`);
  const data = await fetchData.json() as FetchStatsResponse;

  if (data.status === 'success') {
    return data.data.stats;
  }

  throw new Error(data.message);
};

export const fetchExchanges = async (): Promise<Exchange[] | undefined> => {
  const fetchData = await fetch(`${baseUrl}/exchanges`);
  const data = await fetchData.json() as FetchExchangesResponse;

  if (data.status === 'success') {
    return data.data.exchanges;
  }

  throw new Error(data.message);
};

export const fetchCoin = async (uuid: string): Promise<FullCoinInformation | undefined> => {
  const fetchData = await fetch(`${baseUrl}/coin/${uuid}`);
  const data = await fetchData.json() as FetchFullCoinInformationResponse;

  if (data.status === 'success') {
    return data.data.coin;
  }

  throw new Error(data.message);
};
