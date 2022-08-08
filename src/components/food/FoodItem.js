import {useParams} from "react-router-dom";
import {foodItems} from "./FoodList";
import FoodImg from "../../assets/pizza.png";
import {useDispatch} from "react-redux";
import {cartActions} from "../../features/cart/CartSlice";

const FoodItem = () => {
    let {id} = useParams();
    const food = foodItems.find(item => item.id === Number(id));
    const {title, price, category, description} = food;
    const dispatch  = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addItem({id, title, price}))
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={FoodImg} alt="food img" style={{height: '90%', width: '50%'}}/>
                </div>
                <div className="col-lg-6">
                    <h3>{title}</h3>
                    <hr/>
                    <h5>Price: {price}</h5>
                    <br/>
                    <p>{description}</p>
                    <b>Category: {category}</b>
                    <br/><br/><br/>
                    <button className="btn btn-outline-dark" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default FoodItem;