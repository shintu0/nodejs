import { createReadStream, createWriteStream } from "fs";

try {
  const readStream = createReadStream("input.txt");
  const writeStream = createWriteStream("output.txt");
  // Pipe the read and write operations
  // read input.txt and write data to output.txt
  readStream.pipe(writeStream);

  console.log("Program Ended");
} catch (error) {
  // console.log(error.message);
}
