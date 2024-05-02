/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('doctors', function(table) {
      table.string('coordinates');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('doctors', function(table) {
      table.dropColumn('coordinates');
    });
  };