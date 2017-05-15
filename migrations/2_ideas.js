
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ideas', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('notes');
    table.string('defFeatures');
    table.string('posFeatures');
    table.string('market');
    table.string('valueAdd');
    table.string('competition');
    table.string('compImprove');
    table.string('techUsed');
    table.string('challenges');
    table.string('resources');
    table.string('purpose');
    table.string('research');
    table.string('links');
    table.string('excitement');
    table.string('difficulty');
    table.string('stage')
    table.datetime('date').notNullable();
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ideas')

};
