export default cachedEventHandler(async (event) => {
  const users = await useDb().select().from(tables.users).all()

  return users
}, {
  swr: true, maxAge: 10,
})
