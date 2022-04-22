import axios from 'axios';


export const photo = async(fileName:string) => {
	console.log(process.env.API_URL);
	return (await axios.get(`http://${process.env.API_URL}/static/${fileName}`)).data;
};
