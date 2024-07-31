db.bands.find() //show everything
db.bands.find({name:'Ankor'}) //exact search

db.albums.find({ release_year:{$gt:1990} })

// ------------PROJECTION--------------------
db.albums.find({name:'Nightmare'},{name:1,release_year:1,_id:0});
// ------------PROJECTION--------------------
// ------------Sorting--------------------
db.albums.find({},{name:1,release_year:1,_id:0},{name:1});//incr
db.albums.find({},{name:1,release_year:1,_id:0},{name:-1});//decr
// ------------Sorting--------------------

// -----------REGEX---------------------------
db.sales.find({item:{$regex:/a.c/i}},{_id:0});
db.sales.find({item:{$regex:/a.c/i}},{_id:0,date:0});
// -----------REGEX---------------------------
// -----------LIMIT /OFFSET---------------------------
db.sales.find({item:{$regex:/a.c/i}},{_id:0}).limit(10);
db.sales.find({item:{$regex:/a.c/i}},{_id:0,date:0}).limit(10).skip(5);
// -----------LIMIT / OFFSET---------------------------
//OR
db.albums.find({$or:[{name:'Nightmare'},{release_year:1980}]})

db.albums.find({$or:[{name:'Nightmare'},{release_year:{$lt:1980}}]})

//AND
db.albums.find({$and:[{name:'Nightmare'},{release_year:{$lt:1980}}]})

//not
db.albums.find({$and:[{name:{$not:{$eq:'Nightmare'}}},{release_year:{$gt:1980}}]})

//nor
db.albums.find({$nor:[{name:'Nightmare'},{release_year:1980}]});
























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


