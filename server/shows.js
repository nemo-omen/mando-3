const { Router } = require('express');
const { shows } = require('../data/db')

const showsRouter = Router();

showsRouter.get('/', (req, res, next) => {
  res.json({
    shows: 'Alive',
  });
});

module.exports = {
  showsRouter
};