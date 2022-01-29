import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: ${({ theme }) => theme.colors.red};
    color: #fff;
    padding: 100px 0 60px;
    ul {
        list-style-type: none;
    }
    ul li {
        margin-bottom: 20px;
    }
    p {
        text-align: right;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;
        ul {
        padding: 0;
        }
        p {
        text-align: center;
        }
    }
`;

