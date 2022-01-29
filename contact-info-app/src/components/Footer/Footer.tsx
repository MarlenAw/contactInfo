import SocialIcons from "../socialIcons/SocialIcons";
import { FlexDivStyled } from "../styles/FlexDiv.styles";
import { FooterStyled } from "../styles/Footer.styles";
import { LogoStyled } from "../styles/Header.styles";
import { FooterProps } from "./types";


const Footer: React.FC<FooterProps> = ({
   
}) => {
    return (
        <FooterStyled>
        
          <LogoStyled src='./images/logo.png' alt=''/>
  
          <FlexDivStyled>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </li>
              <li>some number here 84947932</li>
              <li>exampleofemail@frkjh.com</li>
            </ul>
            <ul>
              <li>About Us</li>
              <li>What We Do</li>
              <li>FAQ</li>
            </ul>
  
            <ul>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
  
            <SocialIcons />
          </FlexDivStyled>      
      </FooterStyled>
     );
};

export default Footer;
