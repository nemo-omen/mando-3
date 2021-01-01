const Datastore = require('nedb');

const users = new Datastore({filename: 'data/users.db', autoload: true});
const graphics = new Datastore({filename: 'data/graphics.db', autoload: true});
const shows = new Datastore({filename: 'data/shows.db', autoload: true});

module.exports = {
  users,
  graphics,
  shows
}