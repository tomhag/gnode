### Package Manager
yarn

### Post
mutation {
  post(
    url: "www.org.com"
    description: "Interesting"
  ) {
    id
  }
}
### Login
mutation {
  login(email: "alice@prisma.io", password: "graphql") {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}
### Newlink
subscription {
  newLink {
      id
      url
      description
      postedBy {
        id
        name
        email
      }
  }
}
### Vote
mutation {
  vote(linkId: "ck0k8buko00hm0830m7lsf24t") {
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}

### Subscription
subscription {
  newVote {
    id
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}
BACK: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazBqd3FvY3owMDRhMDgzMGJudDF2M3l0IiwiaWF0IjoxNTY4NDg3MTMxfQ.ROq6MPDLJ-EBq28lehEJdCfjEmHpjzqtX2x7ndGRIwQ

### Filter
query {
  feed(filter:"ali") {
    id
  	description
    url
    postedBy {
      id
      name
    }
  }
}

### Pagination
query {
  feed(
    first: 5
    skip: 1
  ) {
    id
    description
    url
  }
}

### Sorting
query {
  feed(orderBy: createdAt_ASC) {
    id
    description
    url
  }
}

### Total
query {
  feed {
    count
    links {
      id
      description
      url
    }
  }
}

## Update
mutation {
  updateLink(
    id: "link-3"
    url: "news"
    description: "hello"
  ) {
    id
    url
  	description
  }
}

## Delete
mutation {
  deleteLink(id: "link-4"){
    id
    url
    description
  }
}

## Link
query{
  link(id: "link-3"){
    id
    url
    description
  }
}

### Feed
query{
  feed{
    id
    description
    url
  }
}

### Post
mutation {
  post (
    url: "http://www.mail.com"
    description: "something"
  ) {
    id
  }
}

### Info
query {
  info
}
