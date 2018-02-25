exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('users', table => {
			table.increments();
			table.timestamps();
			table.string('name');
			table.string('bio');
		})
	]);
};

exports.down = function(knex, Promise) {
	return Promise.all([knex.schema.dropTable('users')]);
};
