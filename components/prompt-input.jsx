import React, {useCallback, useState} from 'react';
import {
	Box,
	Divider,
	HStack,
	Icon,
	IconButton,
	Stack,
	Tag,
	Text,
	Textarea,
	useColorModeValue,
} from '@chakra-ui/react';
import {marked} from 'marked';
import {useForm} from 'react-hook-form';
import {useOpenAi} from '@/lib/openai';
import {FiArrowRightCircle} from 'react-icons/fi';

export default function PromptInput({...properties}) {
	const [result, setResult] = useState();
	const backgroundColor = useColorModeValue('gray.50', '#000');
	const color = useColorModeValue('gray.500', '#888');
	const {openai} = useOpenAi();
	const {
		formState: {isSubmitting},
		handleSubmit,
		register,
	} = useForm();

	const onSubmit = useCallback(
		async ({prompt}) => {
			const {data} = await openai.createChatCompletion({
				model: 'gpt-3.5-turbo',
				messages: [{role: 'user', content: prompt}],
				stream: false,
			});
			const tokens = marked.lexer(data?.choices[0]?.message.content);

			setResult(tokens.find(({type}) => type === 'code').text);
		},
		[openai]
	);

	return (
		<Stack
			backgroundColor={backgroundColor}
			borderRadius='md'
			borderWidth='1px'
			spacing={0}
			minWidth='2xl'
			alignSelf='center'
			{...properties}
			as='form'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Box position='relative'>
				<Textarea
					paddingX={4}
					size='sm'
					placeholder='Create animation here...'
					variant='unstyled'
					{...register('prompt', {required: true})}
				/>
				<IconButton
					position='absolute'
					right={2}
					bottom={2}
					size='sm'
					isLoading={isSubmitting}
					type='submit'
					icon={<Icon as={FiArrowRightCircle} fontSize='lg' />}
				/>
			</Box>
			<Divider />
			<HStack padding={4}>
				<Text fontSize='xs' color={color}>
					Reference SVG layers by using
				</Text>
				<Tag>/</Tag>
			</HStack>
		</Stack>
	);
}
