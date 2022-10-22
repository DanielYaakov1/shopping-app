import mongoose from 'mongoose';
const mongoUri = process.env.MONGO_URI;

export const mongooseConnect = async () => {
  if (!mongoUri) {
    throw new Error('Mongo URI is missing');
  }
  try {
    await mongoose.connect(mongoUri);
    // eslint-disable-next-line no-console
    console.log('connected to mongo db');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
