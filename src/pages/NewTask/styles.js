import styled from 'styled-components/native';

import {fonts, colors} from '../../commonStyle';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px 20px 0 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: ${fonts.bold};
  margin-bottom: 20px;
`;

export const DateText = styled.Text`
  font-size: 16px;
  font-family: ${fonts.bold};
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  height: 54px;
  font-family: ${fonts.bold};
  font-size: 16px;
  border-width: 2px;
  border-color: ${colors.primary};
  border-radius: 5px;
  padding: 0 20px;
`;
