import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import compression from 'compression';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { Engine } from 'apollo-engine';

import { Users } from './sql/models';

import schema from './schema';

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 8080);

const engine = new Engine({
	engineConfig: {
		apiKey: process.env.ENGINE_API_KEY
	},
	graphqlPort: app.get('port')
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

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/graphql';
mongoose.connect(mongoURI);
mongoose.connection.on('connected', () => {
	console.log('mongodb connection is now open');
});

export default app;
