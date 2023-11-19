const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });
const port = process.env.PORT || 5001;
const appRouter = require("./routes/blogPostRotes");

const app = express();
app.use(express.json());
app.use("/posts", appRouter);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
