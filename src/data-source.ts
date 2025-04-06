import 'reflect-metadata';
import { DataSource } from 'typeorm';
import typeOrmConfig from './typeorm.config';

import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
  ...typeOrmConfig,
});
