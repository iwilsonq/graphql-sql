import knex from './connector';

export class Users {
	find() {
		return knex('users');
	}

	findById(id) {
		const query = knex('users').where({ id });
		return query.then(([row]) => row);
	}
}
