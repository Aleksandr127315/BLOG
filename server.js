import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

//КЛЮЧЕВОЙ КОД
server.use((req, res, next) => {
	res.header('Access-Control-Expose-Headers', 'Link');
	next();
});

server.use(router);

server.listen(3030);
