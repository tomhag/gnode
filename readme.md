mutation {
  post(
    url: "www.prisma.io"
    description: "Prisma replaces traditional ORMs"
  ) {
    id
  }
}

# With every mutation you send, the idCount will increase and the following IDs for created links will be link-2, link-3, and so forth…

## TEST: Implement CRUD for the Link Type
type Query {
  # Fetch a single link by its `id`
  link(id: ID!): Link
}

type Mutation {
  # Update a link
  updateLink(id: ID!, url: String, description: String): Link

  # Delete a link
  deleteLink(id: ID!): Link
}

# IS THIS THE LATEST?