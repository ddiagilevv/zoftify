import { DataSourceOptions } from 'typeorm';
import { configuration } from '../config/configuration';
import { User } from '../users/entities/user.entity';

const config = configuration();

export const typeormConfig: DataSourceOptions = {
  type: 'postgres',
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.name,
  entities: [User],
  synchronize: false,
  migrationsRun: true,
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  logging: process.env.NODE_ENV !== 'production',
};
