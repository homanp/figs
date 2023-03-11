'use client';
import React from 'react';
import {Stack} from '@chakra-ui/react';
import ColorModeSwitch from '@/components/color-mode-switch';

export default function Sidebar() {
	return (
		<Stack width='70px' borderRightWidth='1px' alignItems='center'>
			<ColorModeSwitch />
		</Stack>
	);
}
