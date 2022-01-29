import styled from "styled-components";

export const HeaderStyled = styled.header<{bg?: string}>`
    padding: 40px 0;
    background-color: ${(props)=> props.bg};
`;