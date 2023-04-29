import fs from "fs";
import path, { resolve } from "path";

try {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  console.log(path.dirname(import.meta.url));
  console.log(process.cwd());
  console.log(__dirname);
  await new Promise((res, rej) => {
    fs.mkdir("output", { recursive: true }, (err) => {
      if (err) {
        console.log(err);
      } else {
        resolve("Created");
      }
    });
  });
  fs.writeFileSync(
    path.join(process.cwd(), "/output/hello.txt"),
    "Hello World"
  );
} catch (error) {
  console.log("--------------ERROR-----------------");
  console.log(error.message);
} finally {
  console.log("Done........,_/");
}
