import styled from 'styled-components/native';
import {colors} from '../../assets/colors';

export const Container = styled.View`
  background-color: ${colors.background};
  padding: 0 1%;
  flex: 1;
`;

export const ContainerCharacter = styled.TouchableOpacity`
  width: 30%;
  flex-grow: 1;
  background-color: #2d2f53;
  margin: 1%;
  padding: 10px;
  /* align-items: center; */
  border-radius: 24px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 16px;
`;
