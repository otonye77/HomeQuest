const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "mydatabase.db"
});

sequelize.sync().then(() => {
    console.log("Database and table created")
});

module.exports = sequelize;
