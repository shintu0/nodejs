import * as fs from 'node:fs';
import path from 'node:path';
import { argv } from 'node:process';

// console.log(">>>>>>>>>>>>>>.")
// console.log(import.meta.dirname ) // The current module's directory name (__dirname)
// console.log(import.meta.filename); // The current module's file name (__filename)
// console.log(">>>>>>>>>>>>>>.")
// console.log(argv)
const dirname=import.meta.dirname;
const filename=import.meta.filename;
if(argv.length>=3){
  switch (argv[2]) {
    case 'add':
      fs.writeFileSync(path.join(dirname,argv[3]+'.txt'),argv[4]);      break;
    case 'remove':
      fs.unlinkSync(path.join(dirname,argv[3]+'.txt'));
      break;
    case 'append':
      fs.appendFile(path.join(dirname,argv[3]),argv[4],(error)=>{
        console.log(error);
      })
      break;
    case 'list':
      // console.log("Yes")
      fs.readdir(dirname,(error,files)=>{
        if(error){
          console.log(error);
        }else{
          console.log(files)
        }
      })
      break;
    
    default:
      console.log('Invalid Option');
      break;
  }
}

