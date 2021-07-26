import '../../generators/schema/schemaType.js';

const Client = {
	name: {
		type: Text,
		required: true
	},
	email: Email,
	createAt: Date,
	isValid: Boolean,
	pwd: Password,
	weight: Number,
	photo: File
}

export default Client;
