use('record_company')
db.createCollection('bands')
db.createCollection('albums')

//to drop current database
db.dropDatabase()

// to see use below command
// show databases
// to see collections use below command
// show collections

// delete collection
db.collection_name.drop()