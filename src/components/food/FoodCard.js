import { useDispatch } from "react-redux"
import { cartActions } from "../../features/shopping-cart/CartSlice";

const FoodCard = (props) => {
    const { id, title, price } = props.item
    const dispatch  = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id, title, price
        }))
    }
    return (
        <div className="col-lg-3" style={{marginBottom: '20px'}}>
            <div className="card">
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