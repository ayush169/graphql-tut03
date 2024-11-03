export const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
    publishedYear: Int
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, publishedYear: Int): Book!
    updateBook(id: ID!, title: String, author: String, publishedYear: Int): Book
    deleteBook(id: ID!): Boolean
  }
`;
