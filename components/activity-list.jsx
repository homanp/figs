import React from 'react';
import {HStack, Icon, Stack, Text, useColorModeValue} from '@chakra-ui/react';
import NonIdealState from '@/components/non-ideal-state';
import {FiActivity} from 'react-icons/fi';

export default function ActivityList() {
	const color = useColorModeValue('gray.500', 'gray.300');

	return (
		<Stack>
			<Stack
				width='400px'
				borderRightWidth='1px'
				flex={1}
				paddingY={2}
				paddingX={4}
			>
				<HStack paddingY={2} justifyContent='space-between'>
					<HStack>
						<Icon as={FiActivity} color={color} />
						<Text fontSize='sm' color={color}>
							Activity
						</Text>
					</HStack>
					<Text
						padding={1}
						fontSize='sm'
						color={color}
						backgroundColor={useColorModeValue(
							'gray.50',
							'blackAlpha.800'
						)}
						borderRadius='md'
					>
						⌘T
					</Text>
				</HStack>
				<Stack flex={1} alignItems='center' justifyContent='center'>
					<NonIdealState
						icon={FiActivity}
						title='No changes found'
						description='Add a file and start animating'
					></NonIdealState>
				</Stack>
			</Stack>
		</Stack>
	);
}
