// @deno-types="./generated/client/index.d.ts"
import { PrismaClient } from './generated/client/edge.js'

const prisma = new PrismaClient()

const main = async () => {
  const users = await prisma.user.findMany({
    where: {
      name: {
        startsWith: 'A',
      },
    },
  })

  console.log('Top users (alphabetical): ', users)
}

main()
  .catch((e) => console.error('Error in Prisma Client query: ', e))
  .finally(async () => await prisma.$disconnect())
