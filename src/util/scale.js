import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const guidelineBaseWidth = 411;

const scale = (size) => (width / guidelineBaseWidth) * size;

export default scale;