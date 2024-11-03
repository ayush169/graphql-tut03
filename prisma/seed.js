// prisma/seed.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Clean the database
  await prisma.book.deleteMany();

  // Create initial books
  const books = await Promise.all([
    prisma.book.create({
      data: {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925,
      },
    }),
    prisma.book.create({
      data: {
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949,
      },
    }),
  ]);

  console.log("Seeded:", books);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
