import * as React from 'react';

import {
  RiArrowDownSFill,
  RiArrowUpSFill,
} from 'react-icons/ri';

import { isPositive } from '@/utils/isPositive';

import * as S from './styled';

export interface CoinInfoProps {
  coin: string;
  rank: number;
  value: string;
  change: string;
  iconUrl: string;
}

export const CoinInfo = (props: CoinInfoProps) => {
  const {
    coin,
    rank,
    value,
    change,
    iconUrl,
  } = props;

  const isChangePositive = isPositive(change);

  return (
    <S.CoinRoot>
      <S.ContentWrapper>
        <img src={iconUrl} alt="" height={48} width={48} />

        <S.ValueWrapper>
          <S.Coin>
            {coin}

            <S.Rank>#{rank}</S.Rank>
          </S.Coin>

          <S.ValueContainer>
            <S.Value>
              $ {value}
            </S.Value>

            {isChangePositive ? (
              <RiArrowUpSFill size={24} />
            ) : (
              <RiArrowDownSFill size={24} />
            )}

            <S.Change state={isChangePositive}>{Math.abs(Number(change))}%</S.Change>
          </S.ValueContainer>
        </S.ValueWrapper>
      </S.ContentWrapper>
    </S.CoinRoot>
  );
};
