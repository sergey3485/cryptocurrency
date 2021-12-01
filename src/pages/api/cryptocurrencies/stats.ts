import { NextApiHandler, NextApiResponse } from 'next';

import { fetchStats, Stats } from '@/modules/cryptocurrencies/api';

const handler: NextApiHandler = async (req, res: NextApiResponse<Stats | undefined>) => {
  const stats = await fetchStats();

  res.status(200).json(stats);
};

export default handler;
