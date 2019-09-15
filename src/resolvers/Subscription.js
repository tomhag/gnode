// Subscription resolver function
function newLinkSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
}

const newLink = {
  subscribe: newLinkSubscribe,  // Resolver function wrapped inside the newLink object
  resolve: payload => { //returns the data from the data emitted by the AsyncIterator
    return payload
  },
}

function newVoteSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => {
    return payload
  },
}

module.exports = {
  newLink,
  newVote,
}