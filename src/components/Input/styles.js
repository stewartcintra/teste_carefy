import styled from 'styled-components/native';

import {colors, fonts} from '../../commonStyle';

export const Container = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-radius: 5px;
  height: 52px;
  border-color: ${colors.primary};
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: ${fonts.bold};
  color: ${colors.black};
  height: 52px;
  padding-left: 15px;
  padding-right: 10px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-family: ${fonts.bold};
  color: ${colors.primary};
  margin-bottom: 5px;
`;
