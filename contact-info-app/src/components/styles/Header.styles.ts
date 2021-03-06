import styled from "styled-components";

export const HeaderStyled = styled.header`
    background-color: ${({theme}) => theme.colors.white};
    padding: 40px;
`;

export const NavStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
    }
`;

export const LogoStyled = styled.img`
    width: 50px;
    padding: 40px 0;

    @media(max-width: ${({theme}) => theme.mobile}){
        margin-bottom: 40px;
    }
`;

export const ImageStyled = styled.img`
    width: 375px;
    margin-left: 40px;

    @media(max-width: ${({theme}) => theme.mobile}){
        margin-bottom: 40px 0 30px;
    }
`;