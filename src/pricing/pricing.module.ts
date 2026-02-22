import { Module } from '@nestjs/common';
import { PricingController } from './pricing.controller';
import { PricingService } from './pricing.service';
import { CoingeckoModule } from '../exchanges/coingecko/coingecko.module';

@Module({
  imports: [CoingeckoModule],
  controllers: [PricingController],
  providers: [PricingService],
})
export class PricingModule {}
