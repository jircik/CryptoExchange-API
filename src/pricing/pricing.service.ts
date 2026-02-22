import { Injectable } from '@nestjs/common';
import { CoingeckoService } from '../exchanges/coingecko/coingecko.service';

@Injectable()
export class PricingService {
  constructor(private readonly coingeckoService: CoingeckoService) {}

  async getBestPrice(coin: string) {
    const data = await this.coingeckoService.getPrice(coin);

    const coinData = data[coin];

    return {
      coin,
      price: {
        usd: coinData.usd,
        brl: coinData.brl,
      },
      source: 'CoinGecko',
      timestamp: new Date().toISOString(),
    };
  }
}
