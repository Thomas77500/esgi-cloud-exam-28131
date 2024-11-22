const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'DB_HOST',
  'DB_USER',
  'DB_PASSWORD',

  {
    dialect:'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;