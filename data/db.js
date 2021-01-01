const {createRxDatabase, addRxPlugin} = require('rxdb');

addRxPlugin(require('pouchdb-adapter-leveldb'));
const leveldown = require('leveldown');

async function createDb(name) {
  graphics = await createRxDatabase({name: `/data/${name}`, adapter: leveldown});
}

console.dir('graphics',graphics);

module.exports = {
  users,
  graphics,
  shows
}