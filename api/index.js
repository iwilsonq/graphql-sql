import { createServer } from 'http';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { Engine } from 'apollo-engine';

import { Users } from 'sql/models';

import schema from './schema';

export function run({ PORT: graphqlPort = 8080 }) {
	const app = express();

	const engine = new Engine({
		engineConfig: {
			apiKey: process.env.ENGINE_API_KEY
		},
		graphqlPort
	});

	engine.start();

	app.use(engine.expressMiddleware());
	app.use(compression());
	if (process.env.NODE_ENV !== 'production') {
		app.use(morgan('dev'));
	}
	app.use(cors());
	app.use(bodyParser.json());

	app.use(
		'/graphql',
		graphqlExpress({
			schema,
			tracing: true,
			context: {
				Users: new Users()
			}
		})
	);
	app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

	const server = createServer(app);

	server.listen(graphqlPort, () => {
		console.log(
			`API Server is now running on http://localhost:${graphqlPort}`
		); // eslint-disable-line no-console
		console.log(
			`GraphiQL Editor is now running on http://localhost:${graphqlPort}/graphiql`
		); // eslint-disable-line no-console
	});

	return server;
}
