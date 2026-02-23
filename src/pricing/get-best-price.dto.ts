import { IsString, IsNotEmpty, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetBestPriceDto {
  @ApiProperty({
    example: 'bitcoin',
    description: 'Nome da criptomoeda na CoinGecko',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9-]+$/, {
    message: 'coin deve conter apenas letras, números ou hífen',
  })
  coin: string;
}
