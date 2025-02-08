import Header from "./Header";

import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>

            <main className="">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Layout;
