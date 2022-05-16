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
