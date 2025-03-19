import mongoose from 'mongoose';

const DB_URI =
  'mongodb+srv://Annatest:Annatest22@cluster-questionnaire.8refb.mongodb.net/questionnaire?retryWrites=true&w=majority&appName=Cluster-Questionnaire';

async function initMongoConnection() {
  try {
    await mongoose.connect(DB_URI);
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
}
export { initMongoConnection };
