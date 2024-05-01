/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('doctors', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.increments('cpso_number').notNullable();
    table.string('specialty').notNullable();
    table.string('practice_name').notNullable();
    table.string('address').notNullable();
    table.string('city').notNullable();
    table.string('province').notNullable();
    table.string('postal_code').notNullable();
    table.string('phone_number').notNullable();
    table.string('status').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('doctors');
};
