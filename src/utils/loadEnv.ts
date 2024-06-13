import process from 'node:process';
import { LOCAL_STAGES } from '@constants/common';
import { config } from 'dotenv';

const { NODE_ENV } = process.env;
const path = `.env${NODE_ENV ? `.${NODE_ENV}` : ''}`;
const envConfig = config({ path });

let { APP_STAGE = '' } = process.env;
APP_STAGE = envConfig.parsed?.APP_STAGE || APP_STAGE;

export const IS_LOCAL = LOCAL_STAGES.includes(APP_STAGE);
export default envConfig;
