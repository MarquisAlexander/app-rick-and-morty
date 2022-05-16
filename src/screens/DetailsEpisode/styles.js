import styled from 'styled-components/native';
import {colors} from '../../assets/colors';

export const Container = styled.ScrollView`
  background-color: ${colors.background};
  padding: 0 16px;
  /* align-items: center; */
`;

export const ImageProfile = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

export const Header = styled.View`
  align-items: center;
  padding: 24px 0;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const DefaultText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const EpisodeContainer = styled.View`
  flex-grow: 1;
  width: 30%;
  background-color: ${colors.secondary};
  margin: 1%;
  padding: 10px 5px;
  align-items: center;
  border-radius: 24px;
`;
