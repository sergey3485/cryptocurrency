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
          <S.TableHead>
            Cryptocurrency
          </S.TableHead>

          <S.TableHead>
            Price
          </S.TableHead>

          <S.TableHead>
            Market Cap
          </S.TableHead>

          <S.TableHead>
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
              key={data.rank}
              onClick={() => router.push(`/cryptocurrencies/coins/${data.uuid}`)}
            >
              <S.TableCell>
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

              <S.TableCell>
                $ {Number(data.price).toFixed(2)}
              </S.TableCell>

              <S.TableCell>
                {marketCap}
              </S.TableCell>

              <S.TableCell>
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
