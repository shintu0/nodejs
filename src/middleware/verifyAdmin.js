export default function (req, res, next) {
  if ((req.body.role + "").toUpperCase() === "ADMIN") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}
