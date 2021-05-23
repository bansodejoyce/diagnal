const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./schema/type');
const { resolver } = require('./schema/resolver');
const PORT = process.env.PORT || 3000; 
const app = express();
 
app.use('/requestgraph', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

