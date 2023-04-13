const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models/index");
const config = require("./config/config");
const { mongoose } = require("./models/index");
const bookRoutes = require("./routes/bookRoutes");
const corsOptions = { origin: `http://localhost:3000` };

app.use(cors(corsOptions));
app.use(express.json());
app.use(bookRoutes);

db.mongoose
  .connect(
    `mongodb+srv://${config.userName}:${config.password}@cluster1.qhcltxw.mongodb.net/test`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: config.dbName,
    }
  )
  .then(() => console.log("connection to the database was successful"))
  .catch((err) => console.log("connection to the database failed", err));

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});
