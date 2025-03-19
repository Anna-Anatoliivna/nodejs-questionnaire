import express from 'express';
import { initMongoConnection } from './db/initMongoConnection.js';

const app = express();

const bootstrap = async () => {
  try {
    await initMongoConnection();
    app.listen(8080, () => {
      console.log('Server is running on port 8080');
    });
  } catch (error) {
    console.log('Error while connecting to MongoDB', error);
  }
};

bootstrap();
