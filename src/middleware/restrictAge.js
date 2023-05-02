 const restrictAge = function (req, res, next)  {
  let { age } = req.body;
  age = +age;
  // console.log(`Age: ${age}`);
  if (age < 18 && age > 0) {
    res.status(403).send("Not Authorized to vote");
  } else if (age >= 18) {
    next();
  } else {
    res.status(401).send("Not a valid Age");
  }

  // next();
  
};

export default restrictAge;