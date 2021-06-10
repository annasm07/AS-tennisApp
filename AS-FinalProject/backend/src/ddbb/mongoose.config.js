const { connect } = require('mongoose');
const debug = require('debug')('server:mongoose');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
).then(
  () => debug('database connection stablished'),
  (error) => debug('database connection error', error),
);
