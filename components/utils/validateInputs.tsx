import * as yup from 'yup';
export const validateTrading = (value) => {
	let error;
	if (!value) {
		error = 'Number is required';
	}
	else if(!/^[0-9]+$/.test(value)){
		error = 'Fill in the value with numbers only';
	}
	else if (value.toLowerCase() !== 'naruto') {
		error = 'Jeez! You\'re not a fan 😱';
	}
	return error;
};

export const validateUSD = (value:number) => {
	let error;
	if (!value) {
		error = 'Value is required';
	}
	else if (value <= 0)
	{
		error = 'VDoes not accept negative fields';
	}
	return error;
};


export const validateEmail = (value:string) => {
	let error;
	if (!value) {
		error = 'Name is required';
	}
	else if (!String(value)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		))
	{
		error = 'Value Not Type Email';
	}


	return error;

};

export const validationLogin = yup.object({
	email: yup
		.string()
		.required('This field is required')
		.email('The email is invalid'),
	password: yup
		.string()
		.required('This field is required')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
			'Your password is not strong enough',
		),
});

export const validationRegister = yup.object({
	name: yup.string().required('This field is required'),
	email: yup
		.string()
		.required('This field is required')
		.email('The email is invalid'),
	password: yup
		.string()
		.required('This field is required')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
			'Your password is not strong enough',
		),
	confirmPassword: yup
		.string()
		.required('This field is required')
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
});