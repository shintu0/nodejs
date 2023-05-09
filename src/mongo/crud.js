import { client } from "./index.js";

/*
            ***DATA***
---------------------------------------------
{
  "_id": {
    "$oid": "6454c11a087d1f0b54a41512"
  },
  "name": "John Wick",
  "group": "A",
  "role": "AGENT",
  "salary": 10000
}
---------------------------------------------
{
  "_id": {
    "$oid": "6454c11a087d1f0b54a41512"
  },
  "name": "John Wick",
  "group": "A",
  "role": "AGENT",
  "salary": 10000
}
---------------------------------------------
*/

//READ
async function readData(){
    try {
        await client.connect();
        const db=client.db('ecom');
        const usersCollection=db.collection('users');
        const results=  usersCollection.find({name:"John Wick"});
        console.log(await results.toArray())
       
      } catch (error) {
          console.log("Error:"+error.message);
      }finally{
        await client.close();
      }
      
}
//CREATE
async function insertData(){
    try {
        await client.connect();
        const db=client.db('ecom');
        const usersCollection=db.collection('users');
        const data={
            name:"Sintu Tiwari",
            role:"DEV",
            group:"A"
        }
        const results=await usersCollection.insertOne(data);
        console.log(results.insertedId);
       
      } catch (error) {
          console.log("Error:"+error.message);
      }finally{
        await client.close();
      }
      
}

// await insertData();


//DELETE
async function deleteData(){
    try {
        await client.connect();
        const db=client.db('ecom');
        const usersCollection=db.collection('users');
        const results=await usersCollection.deleteOne({name:"Sintu Tiwari"});
        console.log(results.acknowledged,results.deletedCount);
       
      } catch (error) {
          console.log("Error:"+error.message);
      }finally{
        await client.close();
      }
      
}

await deleteData();


//update

db.users.updateMany({group:{$eq:"A"}},{$set:{salary:10000}})
