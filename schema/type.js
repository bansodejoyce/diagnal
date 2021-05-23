const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
  type Mutation {
    getOgMetadata(url: String): Response
  }

  type Response{
    ogTitle: String
    ogDescription: String
    ogImages: String
    ogKeywords: String
  }

`);

module.exports = {
    schema
}