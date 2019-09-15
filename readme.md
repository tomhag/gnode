# Subscriptions
mutation {
  post(
    url: "www.org.com"
    description: "Interesting"
  ) {
    id
  }
}

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


## Link
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

mutation {
  deleteLink(id: "link-4"){
    id
    url
    description
  }
}

query{
  link(id: "link-3"){
    id
    url
    description
  }
}

query{
  feed{
    id
    description
    url
  }
}

mutation {
  post (
    url: "http://www.mail.com"
    description: "something"
  ) {
    id
  }
}

query {
  info
}
