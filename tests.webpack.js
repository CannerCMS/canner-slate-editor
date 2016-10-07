process.env.NODE_ENV = 'production';

var context = require.context('./test', true, /-test\.jsx?$/);
context.keys().forEach(context);
