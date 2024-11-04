import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto min-h-screen">
                {children}
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
