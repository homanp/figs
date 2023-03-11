'use client';
import React from 'react';
import {Inter} from 'next/font/google';
import {CacheProvider} from '@chakra-ui/next-js';
import {ChakraProvider} from '@chakra-ui/react';
import AppContainer from './container';
import theme from '@/lib/theme';

const inter = Inter({subsets: ['latin']});

export default function AppProvider({children}) {
	return (
		<body className={inter.className}>
			<CacheProvider>
				<ChakraProvider theme={theme}>
					<AppContainer>{children}</AppContainer>
				</ChakraProvider>
			</CacheProvider>
		</body>
	);
}
