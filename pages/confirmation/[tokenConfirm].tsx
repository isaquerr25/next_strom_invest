import { useRouter } from 'next/router';
import axios from 'axios';


const tokenConfirms = async() =>{
	const router = useRouter();
	return (await axios.get(`http://${process.env.URL}/confirmation/${router.query.tokenConfirm}`)).data;
};
export default tokenConfirms;