import nextConnect from 'next-connect';
import helmet from 'helmet';

import database from './database';

const middleware = nextConnect();

middleware.use(helmet())
middleware.use(database);

export default middleware