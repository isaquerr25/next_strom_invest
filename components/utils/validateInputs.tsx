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