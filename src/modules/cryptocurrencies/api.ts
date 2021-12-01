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

export type FetchStatsResponse = CoinrankingResponse<{
  stats: Stats;
}>;

export type FetchAllCoinsResponse = CoinrankingResponse<{
  coins: Coin[];
}>;

export type FetchExchangesResponse = CoinrankingResponse<{
  exchanges: Exchange[];
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
