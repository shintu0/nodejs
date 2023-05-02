/**Important import */
import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import userRouter from "./src/routes/users/index.js";




try {
  const app = express(); //Initialized express app
  dotenv.config(); //configuring env variables
  app.set("view engine", "ejs"); //set template engine
  const publicPath = path.join(process.cwd(), "public"); //path to public folder
  //to access the view on browser go to root/<filename in public folder>
  app.use(express.static(publicPath)); //for rendering static files
  /**
node --experimental-modules myCode.js
   * ACCESS: PUBLIC
   * METHOD: GET
   */
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello" });
  });

  /**
   * Endpoint:http://localhost:7000/about (About)
   * ACCESS: PUBLIC
   * METHOD: GET
   */
  app.get("/about", (req, res) => {
    res.status(200).send("<h1>Hello, We are Nerds<h1>");
  });

  /**
   * Endpoint:http://localhost:7000/help (Help)
   * Access: Public
   * METHOD: GET
   */
  app.get("/help", (req, res) => {
    res.status(200).send("Hello, How can we help you!!!");
  });
  //can be used to serve files directly and with custom url
  /**
   * Endpoint:http://localhost:7000/faq (Help)
   * Access: Public
   * METHOD: GET
   */
  app.get("/faq", (req, res) => {
    res.status(200).sendFile(`${publicPath}/faq.html`);
  });

  //can be used to serve ejs(template) files directly and with custom url
  /**
   * Endpoint:http://localhost:7000/landing (Help)
   * Access: Public
   * METHOD: GET
   */
  app.get("/landing", (req, res) => {
    res.status(200).render(`landing`, {
      data: [
        { name: "Tony", role: "Iron Man" },
        { name: "Peter", role: "Spider Man" },
      ],
    });
  });

  //routes
  app.use("/users",userRouter);

  /**
   * Endpoint:http://localhost:7000/<any unimplemented routes> (Help)
   * Access: Public
   * METHOD: GET
   */
  app.get("/*", (req, res) => {
    res.status(200).sendFile(`${publicPath}/not-found.html`);
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
