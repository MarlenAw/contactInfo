import styled from "styled-components";

export const CardStyled = styled.div<{layout?: any}>`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({ layout }) => layout || 'row'};

    & > div {
        flex: 1;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`;


export const ImageStyled = styled.img<{width?: string, layout?: any}>`
    width: ${({ width }) => width || '250px'};
    float: ${({ layout }) => layout || 'left'};

    @media(max-width: ${({theme}) => theme.mobile}){
        margin-bottom: 40px 0 30px;
    }
`;

