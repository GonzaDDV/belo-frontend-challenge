import { View } from 'react-native';
import { defaultStyles } from 'src/constants/styles';

const ScreenMainView = (props: View['props']) => {
	return <View style={[props.style, defaultStyles.mainContainer]}>{props.children}</View>;
};

export default ScreenMainView;
