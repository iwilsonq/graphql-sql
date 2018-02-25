import { property, constant } from 'lodash';

export const schema = [
	`
# A comment about an entry, submitted by a user
type User {
  # The SQL ID of this entry
  id: Int!

  # The User's name
  name: String!

  # The text of the comment
  bio: String
  
  # A timestamp of when the comment was posted
  createdAt: Float! # Actually a date
}
`
];

export const resolvers = {
	User: {
		repository({ repository_name }, _, context) {
			return context.Repositories.getByFullName(repository_name);
		},
		postedBy({ posted_by }, _, context) {
			return context.Users.getByLogin(posted_by);
		},
		comments({ repository_name }, { limit = -1, offset = 0 }, context) {
			return context.Comments.getCommentsByRepoName(
				repository_name,
				limit,
				offset
			);
		},
		createdAt: property('created_at')
	}
};
