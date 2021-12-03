import * as React from 'react';

import {
  RiArrowDownSFill,
  RiArrowUpSFill,
} from 'react-icons/ri';

import * as S from './styled';

const getCoinChangeState = (value: string) => Number(value) > 0;

export interface CoinProps {
  coin: string;
  rank: number;
  value: string;
  change: string;
  iconUrl: string;
}

export const Coin = (props: CoinProps) => {
  const {
    coin,
    rank,
    value,
    change,
    iconUrl,
  } = props;

  const isChangePositive = getCoinChangeState(change);

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

            <S.Change>{Math.abs(Number(change))}%</S.Change>
          </S.ValueContainer>
        </S.ValueWrapper>
      </S.ContentWrapper>
    </S.CoinRoot>
  );
};
