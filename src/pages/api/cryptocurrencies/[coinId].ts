import { NextApiHandler, NextApiResponse } from 'next';

import { fetchCoin, FullCoinInformation } from '@/modules/cryptocurrencies/api';

const handler: NextApiHandler = async (req, res: NextApiResponse<FullCoinInformation | undefined>) => {
  const { coinId } = req.query;
  const coin = await fetchCoin(coinId as string);

  res.status(200).json(coin);
};

export default handler;

// import { NextApiHandler, NextApiResponse } from 'next';

// import { fetchAllCoins, fetchCoin, FullCoinInformation } from '@/modules/cryptocurrencies/api';

// const handler: NextApiHandler = async (req, res: NextApiResponse<FullCoinInformation | undefined>) => {
//   const coin = await fetchCoin('Qwsogvtv82FCd');

//   res.status(200).json(coin);
// };

// export default handler;
