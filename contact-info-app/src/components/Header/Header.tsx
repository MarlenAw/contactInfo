
import { HeaderProps } from './types';
import { HeaderStyled, ImageStyled, LogoStyled, NavStyled } from '../styles/Header.styles';
import { ButtonStyled } from '../styles/Button.styles';
import { FlexDivStyled } from '../styles/FlexDiv.styles';

const Header: React.FC<HeaderProps> = () => {
    return (
        <HeaderStyled>

            <NavStyled>
                <LogoStyled src='./images/logo.png' alt=''/>
                <ButtonStyled color="#000">Buy Now</ButtonStyled>
            </NavStyled>

            <FlexDivStyled>
                <div>
                    <h1>h1 here here here</h1>
                    <p>
                        Lorem ipsum dolor sit amet. Et optio recusandae et facere veniam sit perferendis doloremque in quam inventore et eius ipsa sit necessitatibus explicabo. Vel minus fugit ad quia nisi aut  enim qui obcaecati tempore. Tempora galisum et molestiae doloremque qui quos labore aut nesciunt unde et aliquid quasi est harum magnam ut eius atque. </p><p>Est cumque rerum est nobis neque in rerum nisi ex unde maxime.
                    </p>
                    <ButtonStyled bg="#ff0099" color="#fff">
                        Get started
                    </ButtonStyled>
                </div>
                <ImageStyled src="./images/black-watch.jpeg"/>
            </FlexDivStyled>
        </HeaderStyled>
     );

    
};

export default Header;
