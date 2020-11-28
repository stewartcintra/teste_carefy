import React, {forwardRef} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../commonStyle';
import {Container, TextInput, Label} from './styles';

function Input({iconLeft, label, iconRight, iconRightPress, ...rest}, ref) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Container>
        {iconLeft && <Icon name={iconLeft} size={25} color={colors.primary} />}

        <TextInput {...rest} ref={ref} />

        {iconRight && (
          <TouchableOpacity onPress={iconRightPress}>
            <Icon name={iconRight} size={25} color={colors.primary} />
          </TouchableOpacity>
        )}
      </Container>
    </>
  );
}

export default forwardRef(Input);
