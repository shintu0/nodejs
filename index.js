import  express from "express";
import * as dotenv from "dotenv";

try {
  const app = express();
  dotenv.config();
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello" });
  });

  app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}: http://localhost:${process.env.PORT}/`);
  });
} catch (error) {
  console.log("Unable to start Server, Error:" + error.message);
}
