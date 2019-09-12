mutation {
  post(
    url: "www.prisma.io"
    description: "Prisma replaces traditional ORMs"
  ) {
    id
  }
}

# With every mutation you send, the idCount will increase and the following IDs for created links will be link-2, link-3, and so forth…