'use client';
import React from 'react';
import {HStack, Icon, Stack, Text, useColorModeValue} from '@chakra-ui/react';
import NonIdealState from '@/components/non-ideal-state';
import {FiActivity} from 'react-icons/fi';

export default function Home() {
	const color = useColorModeValue('gray.500', 'gray.300');

	return (
		<Stack flex={1}>
			<Stack
				width='400px'
				borderRightWidth='1px'
				flex={1}
				paddingY={2}
				paddingX={4}
			>
				<HStack paddingY={2}>
					<Icon as={FiActivity} color={color} />
					<Text fontSize='sm' color={color}>
						Activity
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
