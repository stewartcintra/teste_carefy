import React from 'react';
import {ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../commonStyle';
import {Container, Text} from './styles';

export default function Button({
  onPress,
  icon,
  fontSize,
  buttonSize,
  text,
  loading,
  radius,
}) {
  return (
    <Container onPress={onPress} buttonSize={buttonSize} radius={radius}>
      {loading ? (
        <ActivityIndicator size={30} color={colors.white} />
      ) : (
        <>
          {icon && <Icon name={icon} size={30} color={colors.white} />}
          <Text icon={icon} fontSize={fontSize}>
            {text}
          </Text>
        </>
      )}
    </Container>
  );
}
