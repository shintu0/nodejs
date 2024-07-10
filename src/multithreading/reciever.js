import { response } from "express";

for (let index = 0; index <10000; index++) {
  console.log(index,"------")
  fetch('http://127.0.0.1:7000/blocking').then(response=>JSON.stringify(response)).then(data=>console.log(data)).catch(err=>console.log(err))
}