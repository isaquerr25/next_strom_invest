import { Center, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

export const Loading: FC = () => {
	return (
		<Center h="100%">
			<Spinner sx={{ '--spinner-size': '6rem' }} />
		</Center>
	);
};
