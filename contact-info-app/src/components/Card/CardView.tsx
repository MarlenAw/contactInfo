import { CardStyled } from "../styles/Card.styles";
import { ImageStyled } from "../styles/Card.styles";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
    item: {id, title, body, image}
}) => {
    return (
        <CardStyled layout={id && id % 2 === 0 && 'row-reverse'}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div>
                <ImageStyled src={`./images/${image}`} width="500px" layout={id && id % 2 !== 0 && 'right'}/>
            </div>
        </CardStyled>
     );
};

export default Card;
