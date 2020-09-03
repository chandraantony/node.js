module.exports = {
    "development": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "port": process.env.DB_PORT,
      "dialect": process.env.DB_DIALECT,
      "dialectOptions": {
        "ssl": true,
        "useUTC": false
    },
      "timezone":"00:00",
      "operatorsAliases": true
    },
    "test": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "port": process.env.DB_PORT,
      "dialect": process.env.DB_DIALECT,
      "dialectOptions": {
        "ssl": true,
        "useUTC": false
    },
      "timezone":"00:00",
      "operatorsAliases": true
    },
    "production": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "port": process.env.DB_PORT,
      "dialect": process.env.DB_DIALECT,
      "dialectOptions": {
        "ssl": true,
        "useUTC": false
    },
      "timezone":"00:00",
      "operatorsAliases": true
    }

}

