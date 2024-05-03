/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('doctors', function(table) {
      table.float('latitude').alter();
      table.float('longitude').alter();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('doctors', function(table) {
      table.dropColumn('latitude');
      table.dropColumn('longitude');
    });
  };