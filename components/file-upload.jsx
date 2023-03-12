import React, {useCallback} from 'react';
import {
	Button,
	HStack,
	Icon,
	IconButton,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import {FiChevronRight, FiImage, FiUpload, FiX} from 'react-icons/fi';
import {useForm} from 'react-hook-form';
import ky from 'ky';
import FilePicker from './file-picker';
import {uploadFile} from '@/lib/upload-files';

export default function FileUpload() {
	const color = useColorModeValue('gray.500', 'gray.300');
	const {
		formState: {isSubmitting},
		handleSubmit,
		register,
		watch,
	} = useForm();

	const files = watch('file');
	const onSubmit = useCallback(async ({file: files}) => {
		const [file] = files;

		const {data: uploadUrl} = await ky
			.post('/api/upload-url', {searchParams: {type: file.type}})
			.json();

		const fileUrl = await uploadFile(file, uploadUrl);
	}, []);

	return (
		<Stack as='form' onSubmit={handleSubmit(onSubmit)}>
			<FilePicker accept='.svg' {...register('file')}>
				<Stack
					background={useColorModeValue('white', '#111')}
					alignSelf='center'
					cursor='pointer'
					width='lg'
					borderRadius='md'
					padding={8}
					justifyContent='center'
					alignItems='center'
					spacing={10}
				>
					<Stack justifyContent='center' alignItems='center'>
						<Icon as={FiUpload} />
						<Text fontSize='sm'>Upload SVG</Text>
						<Text fontSize='sm' color={color}>
							Drag n&apos; drop files or click to select
						</Text>
					</Stack>
				</Stack>
			</FilePicker>
			{files?.length > 0 && (
				<HStack spacing={4} alignItems='center' justifyContent='center'>
					<HStack spacing={1}>
						<IconButton
							size='xs'
							icon={<Icon as={FiX} fontSize='md' />}
							variant='ghost'
							color='red'
						/>
						<Text fontSize='sm'>{files[0].name}</Text>
					</HStack>
					<Button
						size='sm'
						rightIcon={<Icon as={FiChevronRight} />}
						type='submit'
						isLoading={isSubmitting}
					>
						Upload
					</Button>
				</HStack>
			)}
		</Stack>
	);
}
