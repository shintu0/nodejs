db.bands.insertOne({id:1,name:"Deuce"})

db.bands.insertMany([
  {id:2,name:"Ankor"},
  {id:1,name:"Avenged Sevenfold"},
])
db.albums.insertMany([
  {band_id:1,name:"The Number of Beasts",release_year:1998},
  {band_id:1,name:"Power Slave",release_year:1985},
  {band_id:2,name:"Nightmare",release_year:2018},
  {band_id:3,name:"Nightmare",release_year:2010},
  {band_id:3,name:"test",release_year:null},
])