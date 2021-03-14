const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
//const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
//const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // User.findById(1)
  //   .then(user => {
  //     req.user = user;
      next();
  //   })
  //   .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
 //app.use(shopRoutes);
 app.use(userRoutes);
app.use(errorController.get404);

// mongoConnect(() => {
//   app.listen(3000);
// })

mongoose.connect('mongodb://sanjana:sheHacks@shehacks-shard-00-00.emoti.mongodb.net:27017,shehacks-shard-00-01.emoti.mongodb.net:27017,shehacks-shard-00-02.emoti.mongodb.net:27017/shehacks?ssl=true&replicaSet=atlas-qmjj8g-shard-0&authSource=admin&retryWrites=true&w=majority',{ useUnifiedTopology: true,useNewUrlParser: true  }).then(result => {
  console.log('Sucessfull!')
  app.listen(3000)
})
.catch(err=>{
  console.log(err);
})