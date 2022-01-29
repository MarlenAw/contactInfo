import {
    ContainerStyled,
} from './styles/Container.styles';
import { HeaderProps } from './types';
import { HeaderStyled, LogoStyled, NavStyled } from './styles/Header.styles';
import { ButtonStyled } from './styles/Button.styles';

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <HeaderStyled>
            <ContainerStyled>
                <NavStyled>
                    <LogoStyled src='./images/logo.png' alt=''/>
                    <ButtonStyled>Buy Now</ButtonStyled>
                </NavStyled>
                <h1>{title}</h1>
            </ContainerStyled>
        </HeaderStyled>
     );

    
};

export default Header;
