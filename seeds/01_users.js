
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      const ideas = [{
        email: '',
        password: '',
        username: '',
        date: new Date()
      }]
      return knex('users').insert()
    });
};
