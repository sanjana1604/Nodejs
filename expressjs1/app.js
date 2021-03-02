const path=require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

//below code is for ejs
app.set('view engine', 'ejs');
app.set('views', 'views');


//below is used for handlebars(aks hbs) and we are doing it this way because it is not in built defined like pug
// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts', defaultLayout:'main-layout', extname:'hbs'}));
// app.set('view engine', 'hbs');
// app.set('views', 'views');


//Below we are telling the express about the pug templating engines  
// app.set('view engine', 'pug');
//this is global configuration value which is not understand by the express when we use some names and values but the name and value are reserved keys.pug is auto registered we cannot set another one because by defualt folder name is views but we let just for understanding do this explicitly.
// app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));//this is for registration of middleware
app.use(express.static(path.join(__dirname, 'public')));
//if we interchange the two lines below that is 12 and 14 then also it will be work properly and we can also add filter in adminRoutes in url 'admin'.
app.use('/admin',adminRoutes.routes);

app.use(shopRoutes);

app.use((req, res, next)=>{
  res.status(404).render('404', {pageTitle: 'Page Not Found', path: null});
});

app.listen(3000);