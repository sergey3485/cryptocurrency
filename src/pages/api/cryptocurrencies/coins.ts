// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiHandler, NextApiResponse, NextApiRequest } from 'next';

import { fetchAllCoins, FetchAllCoinsResponse } from '@/modules/cryptocurrencies/api/coins.service';

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<FetchAllCoinsResponse['data'] | undefined>) => {
  const {
    offset,
    limit,
  } = req.query;

  const data = await fetchAllCoins(Number(offset), Number(limit));

  res.status(200).json(data);
};

export default handler;
