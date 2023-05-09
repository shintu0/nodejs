import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();
export const client = new MongoClient(
  process.env.DB_URI ||
    `mongodb+srv://isintu:isintu@cluster0.p3zkqum.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export async function connectDB() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log("Error: Unable to connect to DB");
  }
}

export async function disconnectDB() {
  try {
    await client.close();
  } catch (error) {
    console.log("Error: Unable to disconnect to DB");
  }
}
