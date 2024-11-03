import { prisma } from "../config/prisma.js";

export const resolvers = {
  Query: {
    books: () => {
      return prisma.book.findMany();
    },
    book: (_, { id }) => {
      return prisma.book.findUnique({
        where: {
          id: id,
        },
      });
    },
  },
  Mutation: {
    addBook: (_, { title, author, publishedYear }) => {
      return prisma.book.create({
        data: {
          title,
          author,
          publishedYear,
        },
      });
    },
    updateBook: (_, { id, ...rest }) => {
      return prisma.book.update({
        where: {
          id: id,
        },
        data: rest,
      });
    },
    deleteBook: async (_, { id }) => {
      try {
        await prisma.book.delete({
          where: {
            id: id,
          },
        });
        return true;
      } catch (error) {
        console.error("Error deleting book:", error);
        return false;
      }
    },
  },
};
