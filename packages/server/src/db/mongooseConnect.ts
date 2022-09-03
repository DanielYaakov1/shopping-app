import mongoose from 'mongoose';
const mongoUri = process.env.MONGO_URI;

export const mongooseConnect = async () => {
  if (!mongoUri) {
    throw new Error('Mongo URI is missing');
  }
  try {
    await mongoose.connect(mongoUri);
    console.log('connected to mongo db');
  } catch (err) {
    console.log(err);
  }
};
