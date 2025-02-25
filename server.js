const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

// console.log(process.env);

const port = process.env.port;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
