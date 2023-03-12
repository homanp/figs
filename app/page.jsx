'use client';
import React from 'react';
import {Card, Center, Flex, Stack, useColorModeValue} from '@chakra-ui/react';
import ActivityList from '@/components/activity-list';
import FileUpload from '@/components/file-upload';

export default function Home() {
	return (
		<Flex flex={1}>
			<ActivityList />
			<Stack flex={1} padding={4} justifyContent='center'>
				<FileUpload />
			</Stack>
		</Flex>
	);
}
