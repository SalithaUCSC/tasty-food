import Footer from "./Footer";
import Header from "./Header";
import Routers from "../router/Routers";

const Layout = () => {
    return (
        <div style={{marginTop: '100px'}}>
            <Header/>
            <div>
                <Routers/>
            </div>
            <Footer/>
        </div>
      );
}

export default Layout;