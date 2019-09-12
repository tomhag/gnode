const { GraphQLServer } = require('graphql-yoga')

//1 Add a new list of dummy data. For now everything is stored in-memory and not in a DB
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL',
}]
// 
let idCount = links.length

//2 We have now moved the typeDef constant to an external file (schema.graphql)
//A link to this file is added to the typeDefs property in the server constant below...

//3 For each root field in any of the schema's root Types (Query, Mutation) we make resolver functions
// These fetches the data requeste from API queries, formated after the typeDefinitions in the
// schema.graphql file

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  // 3
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
}
// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))