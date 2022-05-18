const mysql = require('mysql2')
const config = require('./dbconfig')
let pool

/*
 * Get singleton pool connection to the db
 *
 * @returns pool.promise()
 */
const getPool = () => {
  if (pool) return pool.promise()
  // Create a pool connection to the db
  pool = mysql.createPool({
    connectionLimit: 10,
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE,
    waitForConnections: true
  })

  pool.on('acquire', connection => console.log('Connection %d acquired', connection.threadId))
  pool.on('connection', connection => console.log('Connection.connectionId: ', connection.connectionId))
  pool.on('enqueue', () => console.log('Waiting for available connection slot'))
  pool.on('release', connection => console.log('Connection %d released', connection.threadId))
  return pool.promise()
}

/*
 * Query sql request to the db via singleton pool connection to the db
 * NB: Connection is automatically released when query resolves
 *
 * @param {String} sql - simple query sql
 * @param {*} params
 * @returns {Promise} - Object result or error
 */
const query = (sql, params) => {
  return getPool().query(sql, params)
    .then((rows, fields) => {
      console.log('query - rows[0]:', rows[0])
      return rows[0]
    })
    .catch(error => {
      console.log('query - error:', error)
      throw error
    })
}

module.exports = {
  query
}
