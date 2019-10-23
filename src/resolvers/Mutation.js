const Mutations = {
  async createUser(parent, args, ctx, info) {
    // Have access to db functionality through ctx.
    const user = await ctx.db.mutation.createUser({
      data: {
        ...args,
      },
    }, info); // info variable will insure that the item is returned from the DB once it has been created
    return user;
  },
};

module.exports = Mutations;
