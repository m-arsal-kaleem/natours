const dotenv = require('dotenv');

dotenv.config({ path: './config.env', quiet: true });
const mongoose = require('mongoose');

// Unhandled Exception
process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception . So shutting down');
  console.log(err.name, err.message);

  process.exit(1);
});

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successfull');
  });

// Server Start
const port = 3000;
const server = app.listen(port, () => {
  console.log(`App running   on port ${port}....`);
});

// Unhandled Rejections
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandled Rejection');
  server.close(() => {
    process.exit(1);
  });
});
