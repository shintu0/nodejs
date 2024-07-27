import { default as axios } from "axios";

//GET
async function fetchUserAxios(){
  const response=await axios.get('https://randomuser.me/api/?results=5');
  // console.log(JSON.stringify(response.data));
  return response.data;
}
async function fetchUser(){
  const response=await fetch('https://randomuser.me/api/?results=5');
  // console.log(JSON.stringify(response.data));
  return response.json();
}

// console.log(JSON.stringify(await fetchUser())===JSON.stringify(fetchUserAxios()))
// console.log(await fetchUser())
// console.log(await fetchUserAxios())

//POST

async function loginUser(){
  let user;
  try {
    const response = await fetch(
      "https://next-ts-todo.vercel.app/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "sintu@domain.com",
          password: "Sintu@123",
        }),
      }
    );
  
    user=await response.json();
  } catch (error) {
    console.log(error.message);
  }finally{
    return user;
  }
}
async function loginUserAxios(){
  let user;
  try {
    const response = await axios.post(
      "https://next-ts-todo.vercel.app/api/auth/login",
      {
        email: "sintu@domain.com",
        password: "Sintu@123",
      },
    );
  
    user=await response.data;
  } catch (error) {
    console.log(error.message);
  }finally{
    return user;
  }
}

console.log(await loginUserAxios())
console.log(await loginUser())

