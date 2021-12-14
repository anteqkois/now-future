import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: '.env' });

// Remote database
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbSetting = process.env.DB_SETTING;

// Local database
const urlLocalDatabase = `mongodb://localhost:27017/exampleDatabase`;

const url =
  process.env.DB_MODULE === 'production'
    ? `mongodb+srv://${dbUser}:${dbPassword}@${dbName}.ffjgf.mongodb.net/${dbName}?retryWrites=true&w=majority`
    : urlLocalDatabase;

// const database = () => {
//   try {
//     const database = mongoose.connect(url, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//     });
//     console.log(`Server connected with database`);
//     // return database;
//   } catch (error) {
//     console.log(
//       `Server can't connected with database, error message: ${error}`,
//     );
//   }
// };

const database = mongoose
  .connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log(`Server connected with database`);
  })
  .catch((error) => {
    console.log(
      `Server can't connected with database, error message: ${error}`,
    );
  });
console.log(`Server connected with database`);

export default database;
