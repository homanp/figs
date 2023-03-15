'use client';
import React, {useCallback} from 'react';
import {Box, Flex, Stack} from '@chakra-ui/react';
import {useAtom} from 'jotai';
import ActivityList from '@/components/activity-list';
import FileUpload from '@/components/file-upload';
import {svgAtom} from '@/lib/atom';
import PromptInput from '@/components/prompt-input';

export default function Home() {
	const [svg, setSvg] = useAtom(svgAtom);
	const handleFileUpload = useCallback(
		(values) => {
			setSvg(values);
		},
		[setSvg]
	);

	return (
		<Flex flex={1}>
			<ActivityList />
			<Stack flex={1} padding={4} justifyContent='center'>
				{svg && (
					<Stack flex={1} justifyContent='space-between'>
						<Box>OK</Box>
						<PromptInput justifyItems='flex-end' />
					</Stack>
				)}
				{!svg && <FileUpload onFileUpload={handleFileUpload} />}
			</Stack>
		</Flex>
	);
}
