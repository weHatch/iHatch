
exports.up = function(knex, Promise) {
  return knex.schema.createtable(ideas, (table) => {
    table.increments();
    table.string('description').notNullable();
    table.string('defFeatures').notNullable();
    table.string('posFeatures').notNullable();
    table.string('market').notNullable();
    table.string('valueAdd').notNullable();
    table.string('competition').notNullable();
    table.string('compImprove').notNullable();
    table.string('techUsed').notNullable();
    table.string('challenged').notNullable();
    table.string('resources').notNullable();
    table.string('purpose').notNullable();
    table.string('research').notNullable();
    table.string('links').notNullable();
    table.integer('excitement').notNullable();
    table.integer('difficulty').notNullable();
    table.string('stage')
    table.datetime('date').notNullable();
  })
};

exports.down = function(knex, Promise) {

};
