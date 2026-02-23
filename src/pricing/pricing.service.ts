import { Injectable, NotFoundException } from '@nestjs/common';
import { CoingeckoService } from '../exchanges/coingecko/coingecko.service';

@Injectable()
export class PricingService {
  constructor(private readonly coingeckoService: CoingeckoService) {}

  async getBestPrice(coin: string) {

    const normalizedCoin = coin.toLowerCase().trim();

    const data = await this.coingeckoService.getPrice(normalizedCoin);

    const coinData = data[normalizedCoin];

    if (!coinData) {
      throw new NotFoundException(
        `Moeda "${coin}" não encontrada na Coingecko`,
      );
    }

    return {
      coin: normalizedCoin,
      price: {
        usd: coinData.usd,
        brl: coinData.brl,
      },
      source: 'CoinGecko',
      timestamp: new Date().toISOString(),
    };
  }
}
