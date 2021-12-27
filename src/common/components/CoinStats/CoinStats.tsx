import * as React from 'react';

import {
  RiArrowDownSFill,
  RiArrowUpSFill,
} from 'react-icons/ri';

import { isPositive } from '@/utils/isPositive';
import { convertNumberToShortAbbreviation } from '@/utils/convertNumberToShortAbbreviation';

import * as S from './styled';

export interface CoinStatsProps {
  coinUrl: string;
  coin: string;
  price: string;
  priceChange: string;
  low: string;
  high: string;
  rank: number;
  volume: string;
  marketCap: string;
}

export interface StatsItemProps {
  option: string;
  value: string | number;
  percent?: boolean;
}

interface ArrowProps {
  isValuePositive: boolean;
}

const Arrow = (props: ArrowProps) => {
  const { isValuePositive } = props;
  return (
    isValuePositive ? (
      <RiArrowUpSFill size={24} />
    ) : (
      <RiArrowDownSFill size={24} />
    )
  );
};

const StatsItem = (props: StatsItemProps) => {
  const { option, value, percent } = props;
  const isValuePositive = isPositive(value as string);

  return (
    <S.CoinStatsItem state={isValuePositive}>
      <S.CoinStatsKey>{option}</S.CoinStatsKey>

      <S.ValueContainer>
        {percent && <Arrow isValuePositive={isValuePositive} />}

        <S.CoinStatsValue state={percent}>{value}{percent && '%'}</S.CoinStatsValue>
      </S.ValueContainer>
    </S.CoinStatsItem>
  );
};

interface LastStatsItemProps {
  option: string;
  value: string | number;
  change: string;
  percent?: boolean;
}

const LastStatsItem = (props: LastStatsItemProps) => {
  const {
    option,
    value,
    change,
    percent,
  } = props;
  const isValuePositive = isPositive(change);

  return (
    <S.CoinStatsItem state={isValuePositive}>
      <S.CoinStatsKey>{option}</S.CoinStatsKey>

      <S.ValueContainer>
        <S.CoinStatsValue>{value}</S.CoinStatsValue>
        {percent && <Arrow isValuePositive={isValuePositive} />}

        <S.CoinStatsValue state={percent}>{change}{percent && '%'}</S.CoinStatsValue>
      </S.ValueContainer>
    </S.CoinStatsItem>
  );
};

export const CoinStats = (props: CoinStatsProps) => {
  const {
    coinUrl,
    coin,
    volume,
    price,
    priceChange,
    low,
    high,
    rank,
    marketCap,
  } = props;
  return (
    <S.CoinStatsRoot>
      <S.CoinStatsWrapper>
        <S.Header>
          <img src={coinUrl} alt="" height={48} width={48} />
          <S.Heading>
            <S.Coin>{coin}</S.Coin>
            <S.StatsOption>Price storistics</S.StatsOption>
          </S.Heading>
        </S.Header>
        <S.CoinStatsList>
          <StatsItem option="Price" value={`$ ${price}`} />

          <StatsItem option="Price change" value={priceChange} percent />

          <StatsItem option="24 High" value={high} />

          <StatsItem option="24 Low" value={low} />

          <StatsItem option="Volume" value={convertNumberToShortAbbreviation(volume)} />

          <StatsItem option="Rank" value={`#${rank}`} />

          <LastStatsItem option="Marketing cap" value={`$ ${convertNumberToShortAbbreviation(marketCap)}`} change="-0.50" percent />
        </S.CoinStatsList>
      </S.CoinStatsWrapper>
    </S.CoinStatsRoot>
  );
};
