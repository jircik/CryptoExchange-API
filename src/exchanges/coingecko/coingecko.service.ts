import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

interface CoinGeckoPriceResponse {
  [key: string]: {
    usd: number;
    brl: number;
  };
}

@Injectable()
export class CoingeckoService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getPrice(coin: string): Promise<CoinGeckoPriceResponse> {
    const baseUrl = this.configService.get<string>('COINGECKO_BASE_URL');
    const apiKey = this.configService.get<string>('COINGECKO_API_KEY');

    if (!baseUrl) {
      throw new Error('COINGECKO_BASE_URL não definido');
    }

    try {
      const response: AxiosResponse<CoinGeckoPriceResponse> =
        await firstValueFrom(
          this.httpService.get(`${baseUrl}/simple/price`, {
            params: {
              ids: coin,
              vs_currencies: 'usd,brl',
            },
            headers: {
              'x-cg-demo-api-key': apiKey,
            },
          }),
        );

      return response.data;
    } catch {
      throw new HttpException(
        'Erro ao buscar dados da CoinGecko',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
