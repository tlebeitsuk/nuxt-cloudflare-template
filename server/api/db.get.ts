export default defineEventHandler(async (event) => {
  const users = await useDb().select().from(tables.users).all()

  return users
})
