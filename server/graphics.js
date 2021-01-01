const { Router } = require('express');
const { graphics } = require('../data/db');


const graphicsRouter = Router();

graphicsRouter.get('/', (req, res, next) => {
  res.json({
    graphics: 'Alive',
  });
});

module.exports = {
  graphicsRouter,
}