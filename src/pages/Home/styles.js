import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import {colors, fonts} from '../../commonStyle';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const Card = styled.TouchableOpacity`
  background-color: ${colors.white};
  padding: 20px 20px;
  margin-bottom: 0;
  margin-top: 20px;
  elevation: 2;
  min-height: 50px;
  border-radius: 6px;
  border-left-width: 10px;
  border-left-color: ${colors.primary};
`;

export const Text = styled.Text`
  font-family: ${fonts.bold};
  font-size: 18px;
  margin-bottom: 8px;
`;

export const ContainerEmpty = styled.View`
  flex: 1;
  height: ${Dimensions.get('screen').height - 200}px;
  justify-content: center;
  align-items: center;
`;

export const TextEmpty = styled.Text`
  font-family: ${fonts.bold};
  color: ${colors.grey};
  font-size: 18px;
  margin-top: 20px;
`;
