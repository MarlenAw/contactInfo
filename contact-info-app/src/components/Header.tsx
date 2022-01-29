import {
    ContainerStyled,
} from './styles/Container.styles';
import { HeaderProps } from './types';
import { HeaderStyled } from './styles/Header.styles';

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <HeaderStyled>
            <h1>{title}</h1>
        </HeaderStyled>
     );

    
};

export default Header;
