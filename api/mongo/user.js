import mongoose from 'mongoose';
import InterestSchema from './interest';

const UserSchema = new mongoose.Schema({
	name: {
		type: String
	},
	bio: {
		type: String
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},
	friends: [
		{
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'User'
		}
	],
	interests: [InterestSchema]
});

export default mongoose.model('User', UserSchema);
