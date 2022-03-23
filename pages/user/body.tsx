import { Box, Button, Flex, Text } from '@chakra-ui/react';

export const BodySetOne = () =>{
	return(
		<>
			<Flex
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Box>
					<Flex
						alignItems={'center'}
						justifyContent={'center'}
						width={'100%'}
						display='inline-flex'
						flexWrap={'wrap'}
						gap={2}

					>
						<Block/>
						<Block/>
						<Block/>
						<Block/>
					</Flex>
				</Box>
				<Box>

				</Box>
			</Flex>
		</>
	);
};

const Block = () =>(
	<Flex
		direction={'column'}
		align={'center'}
		pt={2}
		pb={2}
		pr={75}
		pl={75}
		bg='#1e4cff'
		borderRadius={5}
	>
		<Text color='white' fontSize='2xl' fontWeight='black' >
							Your Balance
		</Text>
		<Text color='white' fontSize='4xl' fontWeight='black'>
							$9,999.95
		</Text>
		<Button


			size='md'
			pt={4}
			pb={4}
			pr={8}
			pl={8}
			borderRadius={10}
			bg='#358960'

		>
							Deposit
		</Button>
	</Flex>
);