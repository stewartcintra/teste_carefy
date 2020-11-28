import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container} from './styles';

import {colors} from '../../commonStyle';

export default function ButtonFloat({onPress}) {
  return (
    <Container onPress={onPress}>
      <Icon name="plus" size={25} color={colors.white} />
    </Container>
  );
}
