import styled from "styled-components/native"
import { colors } from "../../assets/colors";

export const Container = styled.ScrollView`
    background-color: ${colors.background};
    padding: 0 16px;
    /* align-items: center; */
`;

export const ImageProfile = styled.Image`
    height: 200px;
    width: 200px;
    border-radius: 100px;
`;

export const Header = styled.View`
    align-items: center;
    padding: 24px 0;
`;

export const Name = styled.Text`
    color: #fff;
    font-size: 24px;
    padding: 24px;
`;

export const defaultText = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const EpisodeContainer = styled.View`
    flex-grow: 1;
    width: 30%;
    background-color: #2D2F53;
    margin: 1%;
    padding: 10px 5px;
    align-items: center;
    border-radius: 24px;
`;