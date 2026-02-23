import { Injectable, NotFoundException } from '@nestjs/common';
import { CoingeckoService } from '../exchanges/coingecko/coingecko.service';
import { BestPriceResponseDto } from './best-price.response.dto';

@Injectable()
export class PricingService {
  constructor(private readonly coingeckoService: CoingeckoService) {}

  // Cache em memória
  private cache = new Map<
    string,
    { data: BestPriceResponseDto; timestamp: number }
  >();

  async getBestPrice(coin: string): Promise<BestPriceResponseDto> {
    const normalizedCoin = coin.toLowerCase().trim();
    const now = Date.now();
    const TTL = 30 * 1000;

    const cached = this.cache.get(normalizedCoin);

    if (cached && now - cached.timestamp < TTL) {
      return cached.data;
    }

    const data = await this.coingeckoService.getPrice(normalizedCoin);
    const coinData = data[normalizedCoin];

    if (!coinData) {
      throw new NotFoundException(
        `Criptomoeda '${coin}' não encontrada na CoinGecko`,
      );
    }

    const response: BestPriceResponseDto = {
      coin: normalizedCoin,
      price: {
        usd: coinData.usd,
        brl: coinData.brl,
      },
      source: 'CoinGecko',
      timestamp: new Date().toISOString(),
    };

    this.cache.set(normalizedCoin, {
      data: response,
      timestamp: now,
    });

    return response;
  }
}
