import app from './api';

app.listen(app.get('port'), () => {
	console.log(
		`Find the server at: http://localhost:${app.get('port')}/graphiql`
	); // eslint-disable-line no-console
});
