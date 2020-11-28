import styled from 'styled-components/native';

import {colors} from '../../commonStyle';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px 20px;
  justify-content: center;
`;

export const ContainerImage = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;
