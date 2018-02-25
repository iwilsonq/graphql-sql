import knex from '../knexfile';

const users = [
	{
		name: 'apollographql/apollo-client',
		bio: 'stubailo'
	},
	{
		name: 'apollographql/graphql-server',
		bio: 'helfer'
	},
	{
		name: 'meteor/meteor',
		bio: 'tmeasday'
	},
	{
		name: 'twbs/bootstrap',
		bio: 'Slava'
	},
	{
		name: 'd3/d3',
		bio: 'Slava'
	},
	{
		name: 'angular/angular.js',
		bio: 'Slava'
	},
	{
		name: 'facebook/react',
		bio: 'Slava'
	},
	{
		name: 'jquery/jquery',
		bio: 'Slava'
	},
	{
		name: 'airbnb/javascript',
		bio: 'Slava'
	},
	{
		name: 'facebook/react-native',
		bio: 'Slava'
	},
	{
		name: 'torvalds/linux',
		bio: 'Slava'
	},
	{
		name: 'daneden/animate.css',
		bio: 'Slava'
	},
	{
		name: 'electron/electron',
		bio: 'Slava'
	},
	{
		name: 'docker/docker',
		bio: 'Slava'
	}
];

export function seed(knex, Promise) {
	return (
		Promise.all([knex('users').del()])

			// Insert some users for the repositories
			.then(() => {
				return Promise.all(
					users.map(({ name, bio }, i) => {
						const createdAt = new Date(Date.now() - i * 10000);

						return knex('users').insert({
							created_at: createdAt,
							updated_at: createdAt,
							name,
							bio
						});
					})
				);
			})
	);
}
