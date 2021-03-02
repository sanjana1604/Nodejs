const path=require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

//below code is for ejs
app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageNotFoundRoute =require('./controllers/404');
app.use(bodyParser.urlencoded({extended : false}));//this is for registration of middleware
app.use(express.static(path.join(__dirname, 'public')));
//if we interchange the two lines below that is 12 and 14 then also it will be work properly and we can also add filter in adminRoutes in url 'admin'.
app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(pageNotFoundRoute.pageNotFound);

app.listen(3000);