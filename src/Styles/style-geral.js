import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    background-color: #f0f0f0;
    align-items: center;
    justify-content: center;
`;

const MeuText = styled.Text`
    font-size: ${props => props.fonteSize || 18}px;
    color: ${props => props.cor || "#333"};
`;

export {
    Container,
    MeuText,
};
