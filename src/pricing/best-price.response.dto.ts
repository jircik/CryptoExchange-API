import { ApiProperty } from '@nestjs/swagger';

class PriceDto {
  @ApiProperty({ example: 52000 })
  usd: number;

  @ApiProperty({ example: 260000 })
  brl: number;
}

export class BestPriceResponseDto {
  @ApiProperty({ example: 'bitcoin' })
  coin: string;

  @ApiProperty({ type: PriceDto })
  price: PriceDto;

  @ApiProperty({ example: 'CoinGecko' })
  source: string;

  @ApiProperty({ example: '2026-02-22T21:00:00.000Z' })
  timestamp: string;
}