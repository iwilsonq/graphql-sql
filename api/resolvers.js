const resolvers = {
	Query: {
		user(_, { id }, context) {
			return context.Users.findById(id);
		},
		users(_, args, context) {
			return context.Users.find();
		}
	}
};

export default resolvers;
