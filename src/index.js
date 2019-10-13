require('dotenv').config({ path: '.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

const cors = { credentials: true, origin: process.env.FRONTEND_URL };

server.start({ cors }, ({ port }) => console.log(`Server is now running on port http://localhost:${port}`));
