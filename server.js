const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./schema/type');
const { resolver } = require('./schema/resolver');
 
const app = express();
 
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));

app.listen(8080);
