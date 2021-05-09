// SETTING THE CONNECTION TO MONGODB CLOUD
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

// CONNECTING TO MONGO CLOUD
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Database connected on port: http://localhost:${PORT}`);
  })
  .catch((err) => {
    console.log(`${err} did not connect`);
  });
