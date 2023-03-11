import AppProvider from './provider';

export const metadata = {
	title: 'Figs | Animate Figma designs with AI',
	description: 'Figs enables you to animate Figma designs with AI.',
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<AppProvider>{children}</AppProvider>
		</html>
	);
}
