import { NextApiHandler, NextApiResponse, NextApiRequest } from 'next';

import { fetchCoin, FullCoinInformation } from '@/modules/cryptocurrencies/api/coins.service';

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<FullCoinInformation | undefined>) => {
  const { coinId } = req.query;
  const coin = await fetchCoin(coinId as string);

  res.status(200).json(coin);
};

export default handler;
