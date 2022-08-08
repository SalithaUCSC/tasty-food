import { useDispatch } from "react-redux"
import { cartActions } from "../../features/cart/CartSlice";
import FoodImg from "../../assets/pizza.png";
import {Link} from "react-router-dom";

const FoodCard = (props) => {
    const { id, title, price, category, description } = props.item
    const dispatch  = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addItem({id, title, price, category, description}))
    }
    return (
        <div className="col-lg-3" style={{marginBottom: "20px"}}>
            <div className="card">
               <Link to={`/food/${id}`}>
                   <img src={FoodImg} className="card-img-top food-img" alt="food img"/>
               </Link>
                <div className="card-body">
                    <h5 className="card-title">Name: {title}</h5>
                    <p className="card-text">Price: {price}</p>
                    <button className="btn btn-dark btn-md" onClick={addToCart}>
                        <i className="fa-solid fa-cart-plus"></i>
                    </button>            
                </div>
            </div>
        </div>
    )
}

export default FoodCard;