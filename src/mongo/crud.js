import { client } from "./index.js";

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
        const results=await usersCollection.deleteOne({name:"Sintu"});
        console.log(results.acknowledged,results.deletedCount);
       
      } catch (error) {
          console.log("Error:"+error.message);
      }finally{
        await client.close();
      }
      
}

await deleteData();