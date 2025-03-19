import express from 'express';
import { initMongoConnection } from './db/initMongoConnection.js';
import { Questionnaire } from './models/questionnaire.js';

const app = express();

app.get('/questionnaires', async (req, res) => {
  try {
    const questionnaires = await Questionnaire.find();
    res.json(questionnaires);
  } catch (error) {
    console.log('Error while fetching questionnaires', error);
    res.status(500).send('Internal Server Error');
  }
});

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
