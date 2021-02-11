const { chargers } = require('./data.js');

exports.resolvers = {
  Query: {
    chargers: () => chargers,
  }
}