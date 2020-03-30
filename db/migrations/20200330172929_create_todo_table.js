
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', function(table){
        table.increments();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.string('title').notNullable();
        table.boolean('completed').notNullable().defaultTo(false);    
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos');
};
