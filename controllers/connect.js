'use strict'

const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'origen2_201403831'
});

module.exports = {
    connection
}