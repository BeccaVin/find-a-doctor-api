/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('doctors', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('cpso_number').unsigned().notNullable();
      table.string('specialty').notNullable();
      table.string('practice_name').notNullable();
      table.string('address_street').notNullable();
      table.string('address_city').notNullable();
      table.string('address_province', 2).notNullable();
      table.string('address_postal_code', 7).notNullable();
      table.string('phone_number').notNullable();
      table.string('status').notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = function(knex) {
    // return knex.schema.dropTable('doctors');
};
