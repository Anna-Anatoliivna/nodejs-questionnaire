import mongoose from 'mongoose';
import { env } from '../utils/env.js';


  // 'mongodb+srv://Annatest:Annatest22@cluster-questionnaire.8refb.mongodb.net/questionnaire?retryWrites=true&w=majority&appName=Cluster-Questionnaire';

async function initMongoConnection() {
  try {
    const user = env('MONGODB_USER');
    const pwd = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster-Questionnaire`,
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
}
export { initMongoConnection };
