import * as React from 'react';
import { useRouter } from 'next/router';

import { Coin } from '@/modules/cryptocurrencies/api/coins.service';
import { isPositive } from '@/utils/isPositive';
import { convertNumberToShortAbbreviation } from '@/utils/convertNumberToShortAbbreviation';

import * as S from './styled';

export interface CoinsTableProps {
  coins: Coin[] | undefined;
}

export const CoinsTable = (props: CoinsTableProps) => {
  const { coins } = props;

  const router = useRouter();

  return (
    <S.CoinTableRoot>
      <S.TableHeader>
        <S.TableRow>
          <S.TableHead width="37.5%" align="left">
            Cryptocurrency
          </S.TableHead>

          <S.TableHead width="25%" align="left">
            Price
          </S.TableHead>

          <S.TableHead width="25%" align="left">
            Market Cap
          </S.TableHead>

          <S.TableHead width="12.5%" align="right">
            24 H
          </S.TableHead>
        </S.TableRow>
      </S.TableHeader>

      <tbody>
        {coins?.map((data) => {
          const isChangePositive = isPositive(data.change);
          const marketCap = convertNumberToShortAbbreviation(data.marketCap);

          return (
            <S.TableRow
              role="link"
              tabIndex={0}
              key={data.uuid}
              onClick={() => router.push(`/cryptocurrencies/coins/${data.uuid}`)}
            >
              <S.TableCell width="37.5%">
                <S.CryptocurrencyWrapper>
                  <S.Rank>
                    {data.rank}
                  </S.Rank>

                  <S.Icon>
                    <img src={data.iconUrl} alt="" height={24} width={24} />
                  </S.Icon>

                  <S.CryptocurrencyName>
                    <S.Text>
                      {data.name}
                    </S.Text>

                    <S.Symbol>
                      {data.symbol}
                    </S.Symbol>
                  </S.CryptocurrencyName>
                </S.CryptocurrencyWrapper>
              </S.TableCell>

              <S.TableCell width="25%">
                $ {Number(data.price).toFixed(2)}
              </S.TableCell>

              <S.TableCell width="25%">
                {marketCap}
              </S.TableCell>

              <S.TableCell width="12.5%" align="right">
                <S.Change isPositive={isChangePositive}>
                  {isChangePositive && '+'}
                  {data.change}
                  %
                </S.Change>
              </S.TableCell>
            </S.TableRow>
          );
        })}
      </tbody>
    </S.CoinTableRoot>
  );
};
