export default cachedEventHandler(async (event) => {
  const users = await useDb().select().from(tables.users).all()

  return { users, generatedAt: new Date().toISOString() }
}, {
  swr: true, maxAge: 20,
})
