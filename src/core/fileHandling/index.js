import fs from "node:fs";
import path from "node:path";

const filename = import.meta.filename;
const dirname = import.meta.dirname;
// console.log(filename);
// console.log(dirname);
// console.log(process.cwd());

const argv = process.argv;
// console.log(argv)
if (argv.length > 3) {
  switch (argv[2]) {
    case "add":
      fs.writeFileSync(path.join(dirname, argv[3] + ".txt"), argv[4]);
      break;
    case "read":
      console.log("------Reading Async------");
      const asyncData = await fs.promises.readFile(path.join(dirname, argv[3] + ".txt"), { encoding: 'utf8' });
      console.log('Async',asyncData);
      console.log("------Reading Sync------");
      // block the other operations
      const data=fs.readFileSync(path.join(dirname, argv[3] + ".txt"),'utf-8');
      console.log('Sync',data);
      
      break;
    case "delete":
      await fs.promises.unlink(path.join(dirname, argv[3] + ".txt"), argv[4]);
      break;
    case "append":
      await fs.promises.appendFile(path.join(dirname, argv[3] + ".txt"), argv[4]);
      break;
    default:
      console.log("Invalid Ops!!!");
      break;
  }
}
