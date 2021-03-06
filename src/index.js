const { prisma } = require('./generated/prisma-client') // added
const { GraphQLServer } = require('graphql-yoga')
const Link = require('./resolvers/Link')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const User = require('./resolvers/User')
const Subscription = require('./resolvers/Subscription')
const Vote = require('./resolvers/Vote')

const resolvers = {
  Link,
  Mutation,
  Subscription,
  Vote,
  Query,
  User
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },

})
server.start(() => console.log(`Server is running on http://localhost:4466`))