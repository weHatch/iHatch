
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      const users = [{
        id:1,
        email: 'ish@gmail.com',
        password: 'password',
        username: 'ish',
        date: new Date()
      }]
      return knex('users').insert(users)
    });
};
