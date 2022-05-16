import styled from "styled-components/native";
import { colors } from "../../assets/colors";

export const ContainerTextInput = styled.View`
    background-color: ${colors.secondary};
    border-radius: 24px;
    margin: 16px 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const InputSearch = styled.TextInput`
    width: 80%;
    color: #fff;
`;

export const ButtonSearch = styled.TouchableOpacity``;