import { Controller, Get, Query } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { GetBestPriceDto } from './get-best-price.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Pricing')
@Controller('pricing')
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}

  @Get('best')
  @ApiOperation({ summary: 'Retorna o melhor preço da criptomoeda' })
  @ApiResponse({ status: 200 })
  async getBestPrice(@Query() query: GetBestPriceDto) {
    return this.pricingService.getBestPrice(query.coin);
  }
}
