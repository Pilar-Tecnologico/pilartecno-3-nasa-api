require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const mongodb = require('./databases/mongodb.connection');

const indexRouter = require('./src/routes/index.router');
const nasaRouter = require('./src/routes/nasa.router');
const teamsRouter = require('./src/routes/teams.router');



const app = express();

mongodb.connectMongoDb()
    .then(() => console.log('Mongodb Connected'))
    .catch(err => console.log(err));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/nasa', nasaRouter);
app.use('/teams', teamsRouter);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.json('error');
// });

module.exports = app;
