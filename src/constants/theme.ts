import { scale } from 'src/utils/fonts';

export const colors = {
	primary: '#894BF0',
	secondary: '#9C3AEA',

	red: '#CD0E61',
	black: '#0B0B0B',
	white: '#F0F2F3',

	bitcoin: '#F7931A',
	ethereum: '#627EEA',
	usdt: '#53ae94',

	gray: {
		100: '#f7fafc',
		200: '#edf2f7',
		300: '#e2e8f0',
		400: '#cbd5e0',
		500: '#a0aec0',
		600: '#718096',
		700: '#4a5568',
		800: '#2d3748',
		900: '#1a202c',
	},

	green: {
		100: '#44CA49',
		200: '#4E9E51',
	},
};

const fontSizes = {
	xs: scale(14),
	s: scale(20),
	m: scale(24),
	l: scale(36),
	xl: scale(46),
};

export const theme = {
	colors: {
		background: colors.primary,
		foreground: colors.white,
		primary: colors.primary,
		gray: colors.gray,
		green: colors.green,
		white: colors.white,

		bitcoin: colors.bitcoin,
		ethereum: colors.ethereum,
		usdt: colors.usdt,
	},
	fontSizes,
	spacing: {
		xs: scale(4),
		s: scale(8),
		m: scale(18),
		l: scale(24),
		xl: scale(40),
		xxl: scale(64),
	},
	textVariants: {
		header: {
			fontSize: fontSizes.xl,
			fontWeight: 'bold',
			color: colors.gray[900],
		},
		body: {
			fontFamily: 'Inter',
			fontSize: 16,
		},
	},
	borderRadius: {
		s: scale(4),
		m: scale(8),
		l: scale(16),
		xl: scale(32),
		circle: scale(5000),
	},
};