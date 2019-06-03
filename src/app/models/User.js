module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING
  })

  return User
}
