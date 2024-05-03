/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('doctors', function(table) {
      table.decimal('latitude', 8, 6).alter();
      table.decimal('longitude', 8, 6).alter();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('doctors', function(table) {
      table.dropColumn('latitude');
      table.dropColumn('longitude');
    });
  };