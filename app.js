var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var router222 = require('./routes/222');
var routeList = require('./routes/list');
var routeListSongListList = require('./routes/ListSongListList');
var change = require('./routes/change');
var update = require('./routes/update');
var AddSongSongList = require('./routes/AddSongSongList');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/222', router222);
app.use('/222/list.html', routeList);
app.use('/222/ListSongListList.html', routeListSongListList);
app.use('/222/change.html', change);
app.use('/222/update.html', update);
app.use('/222/AddSongSongList.html', AddSongSongList);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
