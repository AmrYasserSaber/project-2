import { Pool } from 'pg';
import config from '../config';

const pool = new Pool({
    host: config.host,
    database: config.db,
    user: config.user,
    password: config.password,
    port: parseInt(config.dbport as string, 10),
    max: 4
});

pool.on('error', (error: Error) => {
    console.error(error.message);
});

export default pool;
