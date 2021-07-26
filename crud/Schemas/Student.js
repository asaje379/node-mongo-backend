import '../../generators/schema/schemaType.js';

const Student = {
	name: {
		type: Text,
		minLength: 3,
		maxLength: 255,
		required: true
	},
	email: Email,
	password: Password,
	confirmPassword: {
		type: Password,
		required: true,
		match: /.{4,}/
	},
	age: Number,
	avatar: {
		type: File,
		accept: 'pdf',
		maxSize: '1Mo',
		required: true

	},
	createAt: {
		type: Date,
		min: '2021-06-06',
		max: '2025-09-01',
		required: true,
		required: true
	},
	categorie: [{
		type: ObjectID,
		ref: 'categorie'
	}],
	role: {
		type: Text,
		enum: ['USER', 'ADMIN', 'SUPER-ADMIN']
	},
	something: String,
	enable: {
		type: Boolean,
		default: true
	},
	secondEmail: Email
}

export default Student;