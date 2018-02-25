import fs from 'fs';
import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import { schema as sqlSchema } from './sql/schema';

const rootSchema = [
	`
	type Query {
		me: User
		user(id: Int): User
		users: [User]
	}
`
];

const schema = [...rootSchema, ...sqlSchema];

export default makeExecutableSchema({
	typeDefs: schema,
	resolvers
});
