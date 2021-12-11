import { CoinrankingResponse, baseUrl } from './api';
import { Stats } from './stats.service';

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

export interface FullCoinInformation extends Omit<Coin, 'listedAt'> {
  description: string;
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
  numberOfMarkets: number;
  numberOfExchanges: number;
  allTimeHigh: {
    price: string;
    timestamp: number;
  },
}

export type FetchAllCoinsResponse = CoinrankingResponse<{
  coins: Coin[];
  stats: Stats;
}>;

export const fetchAllCoins = async (offset = 0, limit = 50): Promise<FetchAllCoinsResponse['data'] | undefined> => {
  const fetchData = await fetch(`${baseUrl}/coins?limit=${limit}&offset=${offset}`, {
    headers: {
      'x-access-token': process.env.COINRANKING_API_KEY as string,
    },
  });

  const data = await fetchData.json() as FetchAllCoinsResponse;

  if (data.status === 'success') {
    return data.data;
  }

  throw new Error(data.message);
};

export type FetchFullCoinInformationResponse = CoinrankingResponse<{
  coin: FullCoinInformation;
}>;

export const fetchCoin = async (uuid: string): Promise<FullCoinInformation | undefined> => {
  const fetchData = await fetch(`${baseUrl}/coin/${uuid}`, {
    headers: {
      'x-access-token': process.env.COINRANKING_API_KEY as string,
    },
  });

  const data = await fetchData.json() as FetchFullCoinInformationResponse;

  if (data.status === 'success') {
    return data.data.coin;
  }

  throw new Error(data.message);
};
