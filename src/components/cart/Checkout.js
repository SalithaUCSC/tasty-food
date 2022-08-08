import {useSelector} from "react-redux";

const Checkout = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const submitForm = (e) => {
        e.preventDefault();
    }
    return (
        <div className="container">
            <h3>Checkout</h3>
            <hr/><br/>
            <div className="row g-3">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Shopping Cart</span>
                        <span className="badge bg-secondary rounded-pill">{totalQuantity}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {
                            cartItems.map((item, index) => (
                                <li className="list-group-item d-flex justify-content-between lh-sm" key={index}>
                                    <div>
                                        <h6 className="my-0">{item.title}</h6>
                                    </div>
                                    <span className="text-muted">{item.totalPrice}</span>
                                </li>
                            ))
                        }
                        <li className="list-group-item d-flex justify-content-between">
                            <span><b>Total</b></span>
                            <strong>{totalAmount}</strong>
                        </li>
                    </ul>

                </div>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation">
                        <div className="row g-3">
                            <div className="col-6">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" required=""/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" required=""/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email<span
                                    className="text-muted">(optional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="" required=""/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="city" className="form-label">City</label>
                                <input type="text" className="form-control" id="city" placeholder="" required=""/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="postalCode" className="form-label">Postal Code</label>
                                <input type="text" className="form-control" id="postalCode" placeholder="" required=""/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="country" className="form-label">Country</label>
                                <input type="text" className="form-control" id="country" placeholder="" required=""/>
                            </div>
                            <button onClick={submitForm} className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Checkout;