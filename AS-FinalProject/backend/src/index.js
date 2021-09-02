const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');
const passport = require('passport');
const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');

require('dotenv').config();

require('./passport/passport.config');

require('./ddbb/mongoose.config');

const server = express();
const port = process.env.PORT || 1600;

server.use(morgan('dev'));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/api/auth', authRoutes);

server.use(
  '/api',
  passport.authenticate('jwt', { session: false }),
  profileRoutes,
);

server.listen(port, debug(`server is running on port ${port}`));
