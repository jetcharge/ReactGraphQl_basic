const fs = require(`fs`);
const { ApolloServer, gql } = require('apollo-server');
const schemaFileContent = fs.readFileSync(`./schema.graphql`, `utf8`);
const typeDefs = gql`${schemaFileContent}`;
const { resolvers } = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then( ({url}) => {
  console.log(`GraphQL Server ready at ${url}`);
})