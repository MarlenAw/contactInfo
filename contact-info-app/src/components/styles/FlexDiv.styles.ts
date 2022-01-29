import styled from "styled-components";

export const FlexDivStyled = styled.div`
   display: flex;
   align-items: center;

   //any direct div or ul, set flex: 1
   & > div,
   & > ul {
       flex: 1;
   }
`;

