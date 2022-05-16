import styled from "styled-components/native"
import { colors } from "../../assets/colors";

export const defaultText = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const EpisodeContainer = styled.TouchableOpacity`
    flex-grow: 1;
    width: 30%;
    background-color: ${colors.secondary};
    margin: 1%;
    padding: 10px 20px;
    border-radius: 24px;
`;