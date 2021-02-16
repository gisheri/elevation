const RouteService = {
  getAll(knex, table) {
    return knex.select('*').from(table);
  },
};

module.exports = RouteService;
