import knex from './connector';

export class Users {
	find() {
		const query = knex('users');
		return query.then(data => data);
	}

	findById(id) {
		const query = knex('users').where({ id });
		return query.then(([row]) => row);
	}
}
