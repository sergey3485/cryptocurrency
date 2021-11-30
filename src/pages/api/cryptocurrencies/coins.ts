// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiHandler, NextApiResponse } from 'next';

import { fetchAllCoins, Coin } from '@/modules/cryptocurrencies/api';

const handler: NextApiHandler = async (req, res: NextApiResponse<Coin[] | undefined>) => {
  const coins = await fetchAllCoins();

  res.status(200).json(coins);
};

export default handler;
