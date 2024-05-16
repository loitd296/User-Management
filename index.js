const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/UserRoute");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
