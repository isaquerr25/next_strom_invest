import Router, { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/utils/loading';
import { PopMsg } from '../../components/utils/PopMsg';
import { useBoolean } from '@chakra-ui/react';


const TokenConfirms = () =>{
	const router = useRouter();
	const { tokenConfirm } = router.query;
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');
	const [back,setBack] =  useState<any>(null);
	useEffect( ()=>{
	
		async function fetchData() {

			const result = (await axios.get(`http://${process.env.URL}/confirmation/${tokenConfirm}`)).data;
			const errors = result;
			if (errors !=null) {
				setErrorMsg('Account is valid.');
				setTitleShow('Success');
				setPopShow.on();
			} else {
				setErrorMsg('Try more late');
				setTitleShow('Error');
				setPopShow.on();
			}
		}
		if(tokenConfirm != undefined){
			fetchData();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[tokenConfirm]);
	return (
		<>
			{errorMsg=='' && <Loading/>}
			<PopMsg title={titleShow} msg={errorMsg} display={popShow} hide={()=>{Router.push('/home/login');}}/>
		</>

	);
};
export default TokenConfirms;