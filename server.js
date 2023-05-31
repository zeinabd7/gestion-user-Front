const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// server.post('/users', (req, res) => {
//   const { name,username, password,role,entreprise_id } = req.body;

//   const token = 'your_generated_token_here';
//   const user={username,token};
//   res.json(user);
  
// });

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
