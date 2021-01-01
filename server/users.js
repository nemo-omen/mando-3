const { Router } = require('express');
const { users } = require('../data/db');

const usersRouter = Router();

usersRouter.get('/', (req, res, next) => {
  res.json({
    users: 'Alive',
  });
});

module.exports = {
  usersRouter
};