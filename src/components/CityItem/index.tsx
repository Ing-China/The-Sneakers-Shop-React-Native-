import {Text} from 'react-native';
import {CityItemProps} from '../../types';
import Touchable from '../Touchable';
import {useTheme} from '../../hooks';
import styles from './style';

const CityItem: React.FC<CityItemProps> = ({item, onPress, isActive}) => {
  const {colors} = useTheme();

  return (
    <Touchable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: isActive
            ? colors.secondaryReversed
            : colors.secondary,
        },
      ]}>
      <Text
        style={[
          styles.name,
          {color: isActive ? colors.textReversed : colors.text},
        ]}>
        {item.name}
      </Text>
    </Touchable>
  );
};

export default CityItem;
