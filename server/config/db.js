const Sequelize = require("sequelize");
const { usuario, password } = require("./postgresqlCredentials");

const db = new Sequelize("currencyBird", usuario, password, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
