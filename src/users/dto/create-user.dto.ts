import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The user\'s email address',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'strongPassword123',
    description: 'The user\'s password (minimum 6 characters)',
  })
  @IsString()
  @MinLength(6)
  password!: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The full name of the user',
  })
  @IsString()
  name!: string;
}
