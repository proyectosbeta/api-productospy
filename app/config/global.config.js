import dotenv from 'dotenv';

dotenv.config();

const APP_NAME = process.env.APP_NAME;
const APP_PORT = process.env.APP_PORT;
const URL_DOMAIN = process.env.URL_DOMAIN;
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;

export { APP_NAME, APP_PORT, URL_DOMAIN, MONGO_CONNECTION };
