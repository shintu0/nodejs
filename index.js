try {
  console.log(">>>>>>>START>>>>>");
  const timer=setTimeout(() => {
    console.log(">>>>>>>INSIDE>>>>>");
  }, 3000);
  console.log(timer);
  console.log(">>>>>>>END>>>>>");
} catch (error) {
  console.log("ERROR:" + error.message);
}
