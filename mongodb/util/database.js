// const mongodb= require('mongodb');
// const MongoClient= mongodb.MongoClient;

// let _db;

// const mongoConnect = callback  =>{
//   MongoClient.connect('mongodb://sanjana:sheHacks@shehacks-shard-00-00.emoti.mongodb.net:27017,shehacks-shard-00-01.emoti.mongodb.net:27017,shehacks-shard-00-02.emoti.mongodb.net:27017/shehacks?ssl=true&replicaSet=atlas-qmjj8g-shard-0&authSource=admin&retryWrites=true&w=majority',{ useUnifiedTopology: true }
//   )
//   .then( client => {
//     console.log('Successful!!');
//     _db = client.db();
//     callback();
//   })
//   .catch( err => {
//     console.log(err);
//     throw err;
//   });
// };

// const getDb= () =>{
//   if(_db){
//     return _db;
//   }
//   throw 'No Database Found!';
// }

// exports.mongoConnect= mongoConnect;
// exports.getDb = getDb;