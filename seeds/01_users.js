
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      const users = [{
        email: 'ish@gmail.com',
        password: 'password',
        username: 'ish',
        date: new Date()
      }]
      return knex('users').insert(users)
    });
};
