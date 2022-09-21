'use strict';

import mongoose from 'mongoose';
import {
  APP_NAME,
  APP_PORT,
  MONGO_CONNECTION,
} from './app/config/global.config.js';
import app from './app/app.js';

async function main() {
  await mongoose.connect(`${MONGO_CONNECTION}${APP_NAME}`);
}
async function startServer() {
  app.listen(APP_PORT, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    main().catch((err) => console.log(err));
    console.log(`The server listening on ${APP_PORT}`);
  });
}

// Start server.
startServer();
