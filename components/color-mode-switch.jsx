import React from 'react';
import {Icon, IconButton, useColorMode} from '@chakra-ui/react';
import {FiMoon, FiSun} from 'react-icons/fi/index.js';

export default function ColorModeSwitch({...properties}) {
	const {colorMode, toggleColorMode} = useColorMode();
	const isLight = colorMode === 'light';

	return (
		<IconButton
			variant='ghost'
			onClick={toggleColorMode}
			color={!isLight && 'yellow'}
			icon={<Icon as={isLight ? FiMoon : FiSun} fontSize='xl' />}
			{...properties}
		/>
	);
}
