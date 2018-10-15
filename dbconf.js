const util = require('util');
const mysql = require('mysql');
const { logins } = require('./config.json');
let database;

exports.configure = () => {
	const pool = mysql.createPool({
		host: logins.host,
		user: logins.user,
		password: logins.password,
		database: 'oShi',
	});

	pool.getConnection((err, connection) => {
		if (err) {
			if (err.code === 'PROTOCOL_CONNECTION_LOST') {
				console.error('Database connection was closed.');
			}
			if (err.code === 'ER_CON_COUNT_ERROR') {
				console.error('Database has too many connections.');
			}
			if (err.code === 'ECONNREFUSED') {
				console.error('Database connection was refused.');
			}
		}
		if (connection) connection.release();
		return;
	});

	pool.query = util.promisify(pool.query);

	database = pool;
};

exports.execute = async (request) => {
	try {
		const query = await database.query(request);
		return query;
	}
	catch (error) {
		return false;
	}
};