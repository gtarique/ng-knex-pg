
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, title: 'task 1', completed: false},
        {id: 2, title: 'task 2', completed: false},
        {id: 3, title: 'task 3', completed: false}
      ]);
    });
};
