db.users.find({ salary: { $gt: 10000 }, group: { $eq: "A" } });

db.users.find(
  {
    $and: [
      {
        role: {
          $regex: "MAN",
        },
      },
      {
        group: "A",
      },
    ],
  },
  { name: 1, role: 1, _id: 0, group: 1 }, //projection
  {name:1} //sort
);


