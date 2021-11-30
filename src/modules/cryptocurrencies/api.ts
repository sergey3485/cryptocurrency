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

export type FetchAllCoinsResponse = CoinrankingResponse<{
  coins: Coin[];
}>;

export const fetchAllCoins = async (): Promise<Coin[] | undefined> => {
  const fetchdata = await fetch(`${baseUrl}/coins`);
  const data = await fetchdata.json() as FetchAllCoinsResponse;

  if (data.status === 'success') {
    return data.data.coins;
  }

  throw new Error(data.message);
};
