import { Prisma, PrismaClient } from '@prisma/client'
import { Product as DBProduct } from '$prisma/client'
import { Product, FormProduct } from '$/types'

const prisma = new PrismaClient()

const toProduct = (o: DBProduct): Product => ({
  ...o,
  createdAt: o.createdAt.toString()
})

export const createProduct = async (data: FormProduct) => {
  const dbProduct = await prisma.product.create({
    data
  })
  return toProduct(dbProduct)
}

export const getLatestProducts = async (q?: string) => {
  const condition: Prisma.ProductFindManyArgs = {
    orderBy: { createdAt: 'desc' },
    take: 5
  }
  if (q) {
    condition['take'] = 20
    condition['where'] = {
      name: {
        contains: q
      }
    }
  }
  const dbProducts = await prisma.product.findMany(condition)
  return dbProducts.map(toProduct)
}

export const getProductById = async (id: number) => {
  const dbProduct = await prisma.product.findUnique({
    where: {
      id
    }
  })
  if (!dbProduct) throw new Error('')
  return toProduct(dbProduct)
}

export const updateProduct = async (id: number, data: FormProduct) => {
  const dbProduct = await prisma.product.update({
    where: {
      id
    },
    data
  })
  return toProduct(dbProduct)
}
