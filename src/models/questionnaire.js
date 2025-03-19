import { model, Schema } from 'mongoose';

const QuestionSchema = new Schema(
  {
    questionType: {
      type: String,
      enum: ['text', 'single', 'multiple'],
      required: true,
    },
    options: {
      type: [String],
      default: [],
    },
    answer: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const QuestionnaireSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  questions: {
    type: [QuestionSchema],
    required: true,
  },
  completions: {
    type: Number,
    default: 0,
  },
});

export const Questionnaire = model('Questionnaire', QuestionnaireSchema);
