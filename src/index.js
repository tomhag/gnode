const { GraphQLServer } = require('graphql-yoga')

//1 Add a new list of dummy data. For now everything is stored in-memory and not in a DB
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL',
}]
// 
let idCount = links.length

//
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
// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))