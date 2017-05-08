
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('username').notNullable();
    table.datetime('date').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
