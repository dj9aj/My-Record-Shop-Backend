require('dotenv').config({ path: process.env.ENV_FILE || '.env' });
const server = require('./createServer');

const cors = { credentials: true, origin: process.env.FRONTEND_URL };

server.start({ cors }, ({ port }) => console.log(`Server is now running on port http://localhost:${port}`));
