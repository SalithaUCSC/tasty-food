import {useDispatch} from "react-redux";
import {cartActions} from "../../features/cart/CartSlice";

const CartItem = (props) => {
    const { id, title, price, quantity, totalPrice } = props.item
    const dispatch = useDispatch();
    const incrementItem = () => {
        dispatch(cartActions.addItem({id, title, price}))
    }
    const decrementItem = () => {
        dispatch(cartActions.removeItem(id))
    }
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }
    return (
        <tr key={id}>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{price}</td>
            <td>
                <button onClick={incrementItem} className="btn btn-outline-dark">
                    <i className="fa-solid fa-xs fa-plus"></i>
                </button>
                {quantity}
                <button onClick={decrementItem} className="btn btn-outline-dark">
                    <i className="fa-solid fa-xs fa-minus"></i>
                </button>
            </td>
            <td>{totalPrice}</td>
            <td>
                <button onClick={deleteItem} className="btn btn-danger">
                    <i className="fa-solid fa-xs fa-xmark"></i>
                </button>
            </td>
        </tr>
    )
}

export default CartItem;