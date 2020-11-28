import styled from 'styled-components/native';

import {colors} from '../../commonStyle';

export const Container = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  elevation: 4;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
