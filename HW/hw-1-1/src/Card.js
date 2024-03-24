import { Button } from "./Button";

export const Card = ({title, text}) => {
    return (
        <div>
            <h3>
                Title: {title}
            </h3>
            <p>
                {text}
            </p>
            <div>
                <Button onClickHandler={() => alert('Add to cart')} className="btn-cart">Add to cart</Button>
            </div>
        </div>
    );
}