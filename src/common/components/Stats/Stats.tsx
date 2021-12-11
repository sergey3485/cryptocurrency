import * as React from 'react';
import {
  RiInformationFill,
  RiArrowDownSFill,
  RiArrowUpSFill,
} from 'react-icons/ri';

import { isPositive } from '@/utils/isPositive';

import * as S from './styled';

export interface StatsProps {
  rate1: string;
  rate2: string;
  rate3: string;
}

export interface StatsItemProps {
  title: string;
  value: number;
  change?: string;
  currencyName?: string;
}

export const StatsItem = (props: StatsItemProps): JSX.Element => {
  const {
    title,
    value,
    change,
    currencyName,
  } = props;

  const isChangePositive = isPositive(change ?? '0');

  return (
    <S.StatsItem>
      <S.StatsHeader>
        <S.StatsTitle>{title}</S.StatsTitle>

        <RiInformationFill size={16} color="grey" />
      </S.StatsHeader>

      <S.ValueContainer reverse={!!currencyName}>
        <S.CurrencyMark>{currencyName ?? '$'}</S.CurrencyMark>

        <S.Value>{value}</S.Value>
      </S.ValueContainer>

      {change && (
      <S.QuotationRateContainer state={isChangePositive}>
        {isChangePositive ? (
          <RiArrowUpSFill size={24} />
        ) : (
          <RiArrowDownSFill size={24} />
        )}

        <S.QuotationRate>{Math.abs(Number(change))}%</S.QuotationRate>
      </S.QuotationRateContainer>
      )}
    </S.StatsItem>
  );
};

export const Stats = (props: StatsProps) => {
  return (
    <S.StatsRoot>
      <S.StatsWrapper>
        <StatsItem
          title="Market cap"
          value={275589894}
          change="-0.15"
        />

        <StatsItem
          title="Fully Deluted"
          value={275589894}
          change="-0.25"
        />

        <StatsItem
          title="Volume"
          value={275589894}
          change="0.25"
        />

        <StatsItem
          title="Circulating supply"
          value={275589894}
          currencyName="ETH"
        />
      </S.StatsWrapper>
    </S.StatsRoot>
  );
};
