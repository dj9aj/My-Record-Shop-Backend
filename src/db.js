const { prisma } = require('prisma-binding');

const db = new prisma({ 
  typeDefs: 'src/generated/prisma/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT, 
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;