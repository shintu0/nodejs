const promise = () =>
  new Promise((res, rej) => {
    const num = Math.floor(Math.random() * 10);
    console.log(num);
    if (num % 2 == 0) {
      res("Even");
    } else {
      rej("Odd");
    }
  });

// try {
//   const response = await promise();
//   console.log("Success", response);
// } catch (error) {
//   console.log("Error", error);
// }

const promise1 = new Promise((res, rej) => {
  setTimeout(() => res("1"), 1000);
});
const promise2 = new Promise((res, rej) => {
  setImmediate(() => res("2"));
});
const promise3 = new Promise((res, rej) => {
  setTimeout(() => res("3"), 0);
});

try {
  const result1 = await Promise.allSettled([promise1, promise2, promise3]);
  const result3 = await Promise.any([promise1, promise2, promise3].reverse());
  const result2 = await Promise.race([promise1, promise2, promise3]);
  const result4 = await Promise.all([promise1, promise2, promise3]);

  console.log(result1);
  // console.log("race", result2);
  console.log("any", result3);
  console.log("race", result4);
} catch (error) {
  console.log("error", error);
}

// promise1.then(res=>console.log(res));
// promise2.then(res=>console.log(res));
// promise3.then(res=>console.log(res));

// const promiseChain = () =>
//   new Promise((res, rej) => {
//     res(
//       new Promise((res, rej) => {
//         res(
//           new Promise((res, rej) => {
//             res("Success");
//           })
//         );
//       })
//     );
//   });

// promiseChain()
//   .then((result) => result)
//   .then((result) => result)
//   .then((result) => console.log(result));


//   getUserInfo(userId, function(userInfo) {
//     getOrders(userInfo, function(orders) {
//       getOrderDetails(orders[0], function(orderDetails) {
//         getPaymentInfo(orderDetails, function(paymentInfo) {
//           // Finally, do something with paymentInfo
//         });
//       });
//     });
//   });
  