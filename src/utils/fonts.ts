import { Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 428;
const guidelineBaseHeight = 926;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
