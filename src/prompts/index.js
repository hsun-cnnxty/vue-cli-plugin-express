const { serverDir, shouldServeApp } = require('../config');

module.exports = [
  {
    type: 'confirm',
    name: 'shouldServeApp',
    message: `Should serve vue app? (default: ${shouldServeApp})`,
    description: 'This will allow you to serve the vue app via the express server. So only one server for the app and the api.',
    default: shouldServeApp,
  },
  {
    type: 'input',
    name: 'serverDir',
    message: `Where will be located your server? (default: "${serverDir}")`,
    description: 'The location of your server code, relative to the root of your project.',
    default: serverDir,
  },
];
