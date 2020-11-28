import styled from 'styled-components/native';

import {colors, fonts} from '../../commonStyle';

export const Container = styled.TouchableOpacity`
  height: ${(props) => (props.buttonSize ? props.buttonSize : 52)}px;
  border-radius: ${(props) => (props.radius ? 5 : 0)}px;
  background: ${colors.primary};
  align-self: stretch;
  justify-content: center;
  align-items: center;
  elevation: 1;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : 18)}px;
  font-family: ${fonts.bold};
  color: ${colors.white};
  margin-left: ${(props) => (props.icon ? 10 : 0)}px;
`;
