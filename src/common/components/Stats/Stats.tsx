import * as React from 'react';
import {
  RiInformationFill,
} from 'react-icons/ri';

import { convertNumberToShortAbbreviation } from '@/utils/convertNumberToShortAbbreviation';

import * as S from './styled';

export interface StatsProps {
  marketCap: string;
  numberOfMarkets: number;
  numberOfExchanges: number;
  supply: string;
}

export interface StatsItemProps {
  title: string;
  value: number | string;
  change?: string;
  currencyName?: string;
}

export const StatsItem = (props: StatsItemProps): JSX.Element => {
  const {
    title,
    value,
  } = props;

  return (
    <S.StatsItem>
      <S.StatsHeader>
        <S.StatsTitle>{title}</S.StatsTitle>

        <RiInformationFill size={16} color="grey" />
      </S.StatsHeader>

      <S.ValueContainer>
        <S.CurrencyMark>$</S.CurrencyMark>

        <S.Value>{value}</S.Value>
      </S.ValueContainer>
    </S.StatsItem>
  );
};

export const Stats = (props: StatsProps) => {
  const {
    numberOfExchanges,
    numberOfMarkets,
    supply,
    marketCap,
  } = props;

  return (
    <S.StatsRoot>
      <S.StatsWrapper>
        <StatsItem
          title="Market cap"
          value={convertNumberToShortAbbreviation(marketCap)}
        />

        <StatsItem
          title="number of Markets"
          value={numberOfMarkets}
        />

        <StatsItem
          title="number of Exchanges"
          value={numberOfExchanges}
        />

        <StatsItem
          title="Circulating supply"
          value={convertNumberToShortAbbreviation(supply)}
        />
      </S.StatsWrapper>
    </S.StatsRoot>
  );
};
