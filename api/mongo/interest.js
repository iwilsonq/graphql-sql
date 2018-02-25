import mongoose from 'mongoose';

const InterestSchema = new mongoose.Schema({
	name: {
		type: String
	},
	physical: {
		type: Boolean
	}
});

export default InterestSchema;
