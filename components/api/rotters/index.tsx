import Router from 'next/router';

export const toHome = () =>{
	Router.push('/home');
};

export const toBlog = () =>{
	Router.push('/blog');
};
export const toCycles = () =>{
	Router.push('/cycles');
};
export const toFunds= () =>{
	Router.push('/funds');
};
export const toRegister = () =>{
	Router.push('/register');
};
export const toTransactions = () =>{
	Router.push('/transactions');
};
export const toSupport = () =>{
	Router.push('/support');
};
export const toUser = () =>{
	Router.push('/user');
};
export const toWithdraw = () =>{
	Router.push('/withdraw');
};