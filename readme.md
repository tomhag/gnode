# update a link
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

# delete a link
mutation {
  deleteLink(id: "link-4"){
    id
    url
    description
  }
}

# show a specific link
query{
  link(id: "link-3"){
    id
    url
    description
  }
}

# show full feed
query{
  feed{
    id
    description
    url
  }
}

# add a post
mutation {
  post (
    url: "http://www.m23242ail.com2"
    description: "someth12312321in3232424g"
  ) {
    id
  }
}

# info
query {
  info
}
