import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// const navLinks = [
//     {
//         'title': 'Home',
//         'path': '/',
//         'icon': ''
//     },
//     {
//         'title': 'Food',
//         'path': '/food',
//         'icon': ''
//     },
//     {
//         'title': 'Contact',
//         'path': '/contact',
//         'icon': ''
//     },
//     {
//         'title': 'Cart',
//         'path': '/cart',
//         'icon': 'fa-solid fa-cart-shopping'
//     },
//     {
//         'title': 'Login',
//         'path': '/login',
//         'icon': ''
//     }
// ]

const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>Tasty Food</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <Link className="nav-link" to={'/home'}>Home</Link>
                        <Link className="nav-link" to={'/food'}>Food</Link>
                        <Link className="nav-link" to={'/contact'}>Contact</Link>
                        <Link className="nav-link" to={'/cart'}>
                            <span><i className="fa-solid fa-cart-shopping"></i></span>
                            <span className="badge rounded-pill bg-danger" style={{marginLeft: '5px'}}>
                                {totalQuantity}
                            </span>
                        </Link>
                        <Link className="nav-link" to={'/login'}>
                            <span><i className="fa-solid fa-user" style={{marginRight: '5px'}}></i></span> Login
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
      );
}

export default Header;