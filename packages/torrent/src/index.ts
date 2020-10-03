import { config } from 'dotenv';

config({ path: '.env' });

export * as series from './series';
export * as movies from './movies';
export * from './interfaces';
export * from './providers';
export * from './utilities';

import './utilities/handlers';
