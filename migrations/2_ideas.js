
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ideas', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('description').notNullable();
    table.text('notes');
    table.text('defFeatures');
    table.text('posFeatures');
    table.text('market');
    table.text('valueAdd');
    table.text('competition');
    table.text('compImprove');
    table.text('techUsed');
    table.text('challenges');
    table.text('resources');
    table.text('purpose');
    table.text('research');
    table.text('links');
    table.string('excitement');
    table.string('difficulty');
    table.string('stage')
    table.datetime('date').notNullable()
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ideas')

};
