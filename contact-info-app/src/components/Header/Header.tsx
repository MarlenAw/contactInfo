
import { HeaderProps } from './types';
import { HeaderStyled, LogoStyled, NavStyled } from '../styles/Header.styles';
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
                        Lorem ipsum dolor sit amet. Et optio recusandae et facere veniam sit perferendis doloremque in quam inventore et eius ipsa sit necessitatibus explicabo. Vel minus fugit ad quia nisi aut  enim qui obcaecati tempore. Tempora galisum et molestiae doloremque qui quos labore aut nesciunt unde et aliquid quasi est harum magnam ut eius atque. </p><p>Est cumque rerum est nobis neque in rerum nisi ex unde maxime. Eos suscipit harum ut esse blanditiis nam velit suscipit qui quia voluptatem ut magni quaerat ab sunt illo 33 officiis quia. Et totam debitis et nihil libero qui doloremque debitis non dolor veniam vel voluptates necessitatibus? </p><p>Ex velit eius non vero temporibus ut voluptatum accusamus et magnam voluptatem est expedita inventore. Et galisum illo vel soluta minus a illum quam qui exercitationem voluptatem in eaque facilis! 33 nobis ipsum qui doloremque doloribus rem suscipit expedita et exercitationem enim est eius consequuntur sit harum magni et sunt placeat. Et voluptatibus fuga quo quia internos a dolorum quidem quo voluptas error non corporis adipisci et Quis  ut rerum consectetur.
                    </p>
                    <ButtonStyled bg="#ff0099" color="#fff">
                        Get started
                    </ButtonStyled>
                </div>
            </FlexDivStyled>
        </HeaderStyled>
     );

    
};

export default Header;
