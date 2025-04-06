import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The user\'s email address',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'securePassword123',
    description: 'The user\'s password (min. 6 characters)',
  })
  @IsString()
  @MinLength(6)
  password!: string;
}
