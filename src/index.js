import fs from 'fs';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { get } from './utils';
const PORT = process.env.PORT || 8080;

const app = express();

const users = [
	{ id: '0', name: 'Ian Wilson' },
	{ id: '1', name: 'Max Powers' },
	{ id: '2', name: 'Alex Kim' },
	{ id: '3', name: 'Bill Murray' }
];

const typeDefs = fs.readFileSync(
	path.join(__dirname, 'schema.graphql'),
	'utf8'
);
const resolvers = {
	Query: {
		users: (_, { limit, offset }) => get(users, { limit, offset })
	}
};

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
	logger: { log: e => console.log(e) }
});

if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('dev'));
}

app.use(cors());
app.use(bodyParser.json());

app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}/graphiql`);
});
