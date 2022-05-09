import { Dimensions } from 'react-native';
import { theme } from 'src/constants/theme';
export const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 428;
const guidelineBaseHeight = 926;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

const buttonSizeToStyle = {
	s: {
		icon: scale(20),
		width: scale(34),
		height: scale(34),
	},
	m: {
		icon: scale(32),
		width: scale(54),
		height: scale(54),
	},
	l: {
		icon: scale(48),
		width: scale(80),
		height: scale(80),
	},
};

export { scale, verticalScale, moderateScale, buttonSizeToStyle };
