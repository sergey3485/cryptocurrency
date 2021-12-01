import { NextApiHandler, NextApiResponse } from 'next';

import { fetchExchanges, Exchange } from '@/modules/cryptocurrencies/api';

const handler: NextApiHandler = async (req, res: NextApiResponse<Exchange[] | undefined>) => {
  const exchanges = await fetchExchanges();

  res.status(200).json(exchanges);
};

export default handler;
