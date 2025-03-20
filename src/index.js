import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { initMongoConnection } from './db/initMongoConnection.js';
import { Questionnaire } from './models/Questionnaire.js';
import { env } from './utils/env.js';

const PORT = Number(env('PORT', '3000'));

const app = express();

app.use(cors());
app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

app.get('/questionnaires', async (req, res) => {
  try {
    const questionnaires = await Questionnaire.find();
    res.json(questionnaires);
  } catch (error) {
    console.log('Error while fetching questionnaires', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/questionnaires/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const questionnaire = await Questionnaire.findById(id);
if (!questionnaire) {
      return res.status(404).send('Questionnaire not found');
    }

    res.json(questionnaire);
  } catch (error) {
    console.log('Error while fetching questionnaires', error);
    res.status(500).send('Internal Server Error');
  }
});

const bootstrap = async () => {
  try {
    await initMongoConnection();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log('Error while connecting to MongoDB', error);
  }
};

bootstrap();
