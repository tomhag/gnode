const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (root, args, context, info) => {
      return context.prisma.links()
    },
  },
  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
      })
    },
  },
}

/*
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: (root, args) => links.find(link => link.id === args.id),
  },
  //
  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    },
    updateLink: (root, args) => {
      const index = links.findIndex(link => link.id === args.id);
      links[index].description = args.description!== undefined ? args.description : links[index].description;
      links[index].url = args.url !== undefined ? args.url : links[index].url;
      return links[index];
    },
    deleteLink: (root, args) => {
      for (var i=0; i < links.length-1; i++) {
        if (links[i].id===args.id) {
          const removedLink = links[i];
          links.splice(i,1);
          return removedLink;
        }
      }
    }, 
  }
}
*/ 
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
})
server.start(() => console.log(`Server is running on http://localhost:4000`))