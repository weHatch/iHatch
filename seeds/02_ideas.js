
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ideas').del()
    .then(() => {
      const ideas = [{
        title: 'titles are cool',
        description: 'descriptions are fun',
        notes: '',
        defFeatures: '',
        posFeatures: '',
        market: '',
        valueAdd: '',
        competition: '',
        compImprove: '',
        techUsed:'',
        challenges: '',
        resources:'',
        purpose:'',
        research:'',
        links:'',
        excitement: 2,
        difficulty:5,
        stage: 'Incubate',
        user_id: 1,
        date: new Date()
      },
      {
        title: 'titles are sexy',
        description: 'descriptions are fun',
        notes: '',
        defFeatures: '',
        posFeatures: '',
        market: '',
        valueAdd: '',
        competition: '',
        compImprove: '',
        techUsed:'',
        challenges: '',
        resources:'',
        purpose:'',
        research:'',
        links:'',
        excitement: 2,
        difficulty:5,
        stage: 'Incubate',
        user_id: 1,
        date: new Date()
      }]
      return knex('ideas').insert(ideas)
    });
};




// table.string('description').notNullable();
// table.string('defFeatures').notNullable();
// table.string('posFeatures').notNullable();
// table.string('market').notNullable();
// table.string('valueAdd').notNullable();
// table.string('competition').notNullable();
// table.string('compImprove').notNullable();
// table.string('techUsed').notNullable();
// table.string('challenges').notNullable();
// table.string('resources').notNullable();
// table.string('purpose').notNullable();
// table.string('research').notNullable();
// table.string('links').notNullable();
// table.integer('excitement').notNullable();
// table.integer('difficulty').notNullable();
// table.string('stage')
// table.datetime('date').notNullable();
