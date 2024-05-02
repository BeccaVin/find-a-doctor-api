/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('doctors', function(table) {
      table.integer('latitude');
      table.integer('longitude');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('doctors', function(table) {
      table.dropColumn('coordinates');
      table.dropColumn('latitude');
      table.dropColumn('longitude');
    });
  };