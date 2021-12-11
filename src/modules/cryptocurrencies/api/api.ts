export interface CoinrankingResponse<Data = unknown> {
  status: string;
  data: Data;
  message?: string;
}

export const baseUrl = 'https://api.coinranking.com/v2';
