db.bands.updateOne({name:"Avenged Sevenfold"},{$set:{id:3}})

db.albums.updateMany(
  { release_year:{$gt:1990} },
  { $inc: { release_year: 1 } } 
);

db.albums.updateMany(
  { release_year:{$gt:1990} },
  { $inc: { release_year: -1 } } 
);