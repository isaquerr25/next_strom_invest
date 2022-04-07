import axios from 'axios';


export const photo = async(fileName:string) => {
	console.log(process.env.URL);
	return (await axios.get(`http://${process.env.URL}/static/${fileName}`)).data;
};
