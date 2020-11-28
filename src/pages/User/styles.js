import styled from 'styled-components/native';

import {colors, fonts} from '../../commonStyle';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px 20px;
`;

export const ContainerPicture = styled.View`
  height: 95px;
  width: 95px;
  border-radius: 50px;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  elevation: 2;
  margin-right: 10px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const Card = styled.View`
  background-color: ${colors.white};
  padding: 20px 20px;
  margin-bottom: 10px;
  margin-top: 20px;
  elevation: 2;
  min-height: 180px;
  border-radius: 6px;
  border-left-width: 10px;
  border-left-color: ${colors.primary};
`;

export const Text = styled.Text`
  font-family: ${fonts.bold};
  font-size: 18px;
  margin-bottom: 8px;
`;

export const ContainerDashboard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: -50px;
`;
