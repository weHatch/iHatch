
exports.up = function(knex, Promise) {
  return knex.schema.createtable(users, (table) => {
    table.increments();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('username').notNullable();
    table.datetime('date').notNullable();
    table.integer('idea_id').references('id').inTable('ideas');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(users)
};
