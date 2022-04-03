import { gql, useApolloClient, useMutation } from '@apollo/client';
import { Button, useBoolean } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { PopMsg } from '../../components/utils/PopMsg';
import { useAddDocumentPictureMutation } from '../generated/graphql';
import Router from 'next/router';



const SINGLE_UPLOAD_MUTATION = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      id
    }
  }
`;

export function UploadFile() {
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');


	const [sendDocument,] = useAddDocumentPictureMutation();

	const apolloClient = useApolloClient();
	const onChange = ({
		target: {
			validity,
			files: [file],
		},
	}) =>
		validity.valid &&
    sendDocument({ variables: { picture: file } }).then((back) => {

    	if(back){
    		setErrorMsg('File sent for analysis');
    		setTitleShow('Success');
    		setPopShow.on();
    	}
    	apolloClient.resetStore();

    }).catch(() =>{
    	setTitleShow('Error');
    	setErrorMsg('Ops. Please try again later or change the file or format');
    	setPopShow.on();

    });


	const fileRef = useRef();
	return(
		<div>
			<Button colorScheme='teal' variant='outline' onClick={() => fileRef.current.click()}>
         Custom File Input Button
			</Button>

			<input
				ref={fileRef}
				onChange={onChange}
				multiple={false}
				type="file"
				hidden
				accept="image/*"
			/>
			<PopMsg title={titleShow} msg={errorMsg} display={popShow} hide={() => Router.reload(window.location.pathname)}/>

		</div>
	);
}