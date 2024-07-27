import { default as axios } from "axios";

async function fetchUser(){
  const response=await fetch('https://randomuser.me/api/?results=5');
  // console.log(JSON.stringify(response.data));
  return response.json();
}

// console.log(await fetchUserAxios())

//POST


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

