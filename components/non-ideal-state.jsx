import React from 'react';
import {Icon, Stack, Text, useColorModeValue} from '@chakra-ui/react';

export default function NonIdealState({description, icon, title, children}) {
	const color = useColorModeValue('gray.500', 'gray.300');

	return (
		<Stack alignItems='center'>
			{icon && <Icon as={icon} />}
			<Stack spacing={0} alignItems='center' justifyContent='center'>
				<Text fontSize='sm'>{title}</Text>
				<Text fontSize='sm' color={color}>
					{description}
				</Text>
			</Stack>
			<Stack alignItems='center'>{children}</Stack>
		</Stack>
	);
}
