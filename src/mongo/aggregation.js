/*
As an AI language model, I can provide you with some basic aggregation topics in MongoDB: 
 
1. Grouping and Aggregating Data 
2. Using the $match operator 
3. Using the $project operator 
4. Using the $group operator 
5. Using the $sort operator 
6. Using the $limit and $skip operators 
7. Using the $lookup operator 
8. Using the $unwind operator 
9. Using the $graphLookup operator 
10. Using the $bucket operator


*/

db.users.aggregate([
  { $project: { name: 1, role: 1, _id: 0 } },
  { $match: { name: { $regex: "n" } } },
]);

//will give count of the data by _id
db.users.aggregate([
  {
    $group: {
      _id: "$name",
      total: {
        $sum: 1,
      },
    },
  },
]);

// average
db.users.aggregate([
  {
    $group: {
      _id: "$group",
      avg_Salary: {
        $avg: "$salary",
      },
    },
  },
]);

//SORT REVERSE

db.users.aggregate([
  {
    $sort: {
      name: -1,
    },
  },
]);
