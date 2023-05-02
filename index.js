/**Important import */
import express from "express";
import * as dotenv from "dotenv";

try {
  const app = express(); //Initialized express app
  dotenv.config(); //configuring env variables

  /**
   * Endpoint:http://localhost:7000 (Root)
   * Access: Public
   * METHOD: GET
   */
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello" });
  });

  /**
   * Started server on Specific ports
   */
  app.listen(process.env.PORT, () => {
    console.log(
      `Listening on ${process.env.PORT}: http://localhost:${process.env.PORT}/`
    );
  });
} catch (error) {
  /**
   * Caught Error, if any while starting server
   */
  console.log("Unable to start Server, Error:" + error.message);
}
