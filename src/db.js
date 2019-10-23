const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma/prisma.graphql',
  // endpoint: process.env.PRISMA_ENDPOINT,
  endpoint: 'http://localhost:4466',
  secret: process.env.PRISMA_SECRET,
  debug: true,
});

module.exports = db;
