export const fakePromise = (data)=>new Promise((res, rej) => {
  typeof data==='number'?res("Success"):rej('Not a number');
});
