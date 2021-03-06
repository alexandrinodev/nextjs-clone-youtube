import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let cachedDb;
let cachedClient;

// verifica se uri e dbname existe
if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI enviroment veriable inside .env.local',
  );
}
if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DB enviroment veriable inside .env.local',
  );
}

export async function connectToDatabase() {
  if (cachedDb && cachedClient) {
    return { cliente: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default  connectToDatabase;
