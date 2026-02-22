import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetBestPriceDto {
  @ApiProperty({
    example: 'bitcoin',
    description: 'Nome da criptomoeda na CoinGecko',
  })
  @IsString()
  @IsNotEmpty()
  coin: string;
}
